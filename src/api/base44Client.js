import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68c918156f4c26f77b1d558e", 
  requiresAuth: true // Ensure authentication is required for all operations
});
