
import React, { useState, useEffect, useCallback } from "react";
import { PickupGame, Court, Player } from "@/api/entities";
import { Plus, Calendar, MapPin, Users, Zap, Clock, DollarSign, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import GameCard from "../components/versus/GameCard";
import CreateGameDialog from "../components/versus/CreateGameDialog";
import GameFilters from "../components/versus/GameFilters";
import CourtFinder from "../components/versus/CourtFinder";
import Leaderboard from "../components/versus/Leaderboard";

export default function Versus() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [courts, setCourts] = useState([]);
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateGame, setShowCreateGame] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("games");
  const [filters, setFilters] = useState({
    sport: "",
    skill_level: "",
    date_range: "",
    location: "",
    cost_range: [0, 100]
  });

  const loadGames = async () => {
    setIsLoading(true);
    try {
      const data = await PickupGame.list("-date_time", 50);
      setGames(data);
    } catch (error) {
      console.error("Error loading games:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadCourts = async () => {
    try {
      const data = await Court.list("-rating", 50);
      setCourts(data);
    } catch (error) {
      console.error("Error loading courts:", error);
    }
  };

  const loadPlayers = async () => {
    try {
      const data = await Player.list("-overall_rating", 50);
      setPlayers(data);
    } catch (error) {
      console.error("Error loading players:", error);
    }
  };

  const applyFilters = useCallback(() => {
    let filtered = games;

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.sport.toLowerCase().includes(query) ||
        game.location.city.toLowerCase().includes(query) ||
        game.location.venue_name.toLowerCase().includes(query)
      );
    }

    // Sport filter
    if (filters.sport) {
      filtered = filtered.filter(game => game.sport === filters.sport);
    }

    // Skill level filter
    if (filters.skill_level) {
      filtered = filtered.filter(game => 
        game.skill_level === filters.skill_level || game.skill_level === "all_levels"
      );
    }

    // Location filter
    if (filters.location.trim()) {
      const location = filters.location.toLowerCase();
      filtered = filtered.filter(game => 
        game.location.city.toLowerCase().includes(location) ||
        game.location.state.toLowerCase().includes(location)
      );
    }

    // Cost filter
    filtered = filtered.filter(game => 
      game.cost_per_person >= filters.cost_range[0] && 
      game.cost_per_person <= filters.cost_range[1]
    );

    // Only show future games
    const now = new Date();
    filtered = filtered.filter(game => new Date(game.date_time) > now);

    setFilteredGames(filtered);
  }, [games, searchQuery, filters]); // Dependencies for useCallback

  useEffect(() => {
    loadGames();
    loadCourts();
    loadPlayers(); // Load players on initial mount
  }, []);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]); // Dependency is now the memoized applyFilters callback

  const handleGameCreated = () => {
    setShowCreateGame(false);
    loadGames();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              FitFinder
              <span className="block text-yellow-300">Versus</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Find locals to compete with. Schedule courts. Play pickup games.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => setShowCreateGame(true)}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Game
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveTab("courts")}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Courts
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <TabsList className="bg-slate-100 rounded-lg p-1 grid w-full grid-cols-1 md:grid-cols-3 gap-1">
              <TabsTrigger value="games" className="flex items-center gap-2 data-[state=active]:bg-white">
                <Zap className="w-4 h-4" />
                Pickup Games ({filteredGames.length})
              </TabsTrigger>
              <TabsTrigger value="courts" className="flex items-center gap-2 data-[state=active]:bg-white">
                <MapPin className="w-4 h-4" />
                Courts & Venues ({courts.length})
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2 data-[state=active]:bg-white">
                <Trophy className="w-4 h-4" />
                Leaderboard
              </TabsTrigger>
            </TabsList>
            
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative flex-1">
                <Input
                  placeholder="Search games, sports, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>
            </div>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <GameFilters
                filters={filters}
                setFilters={setFilters}
                onClose={() => setShowFilters(false)}
              />
            )}
          </AnimatePresence>

          {/* Games Tab */}
          <TabsContent value="games" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-64 bg-slate-200 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredGames.map((game, index) => (
                    <GameCard
                      key={game.id}
                      game={game}
                      index={index}
                      onJoin={() => loadGames()}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}

            {!isLoading && filteredGames.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No games found</h3>
                <p className="text-slate-600 max-w-sm mx-auto mb-6">
                  Be the first to create a pickup game in your area!
                </p>
                <Button
                  onClick={() => setShowCreateGame(true)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Game
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Courts Tab */}
          <TabsContent value="courts" className="mt-0">
            <CourtFinder courts={courts} />
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="mt-0">
            <Leaderboard players={players} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Create Game Dialog */}
      <CreateGameDialog
        open={showCreateGame}
        onClose={() => setShowCreateGame(false)}
        onGameCreated={handleGameCreated}
        courts={courts}
      />
    </div>
  );
}
