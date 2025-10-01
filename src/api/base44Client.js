import { createClient } from '@base44/sdk';

const APP_ID_STORAGE_KEY = 'base44:app_id';

function getStoredAppId() {
  if (typeof window === 'undefined') return undefined;

  try {
    return (
      window.sessionStorage?.getItem(APP_ID_STORAGE_KEY) ??
      window.localStorage?.getItem(APP_ID_STORAGE_KEY) ??
      undefined
    );
  } catch (error) {
    console.warn('Unable to read Base44 app id from storage.', error);
    return undefined;
  }
}

function persistAppId(appId) {
  if (typeof window === 'undefined' || !appId) return;

  try {
    window.sessionStorage?.setItem(APP_ID_STORAGE_KEY, appId);
    window.localStorage?.setItem(APP_ID_STORAGE_KEY, appId);
  } catch (error) {
    console.warn('Unable to persist Base44 app id to storage.', error);
  }
}

function resolveAppId() {
  const envAppId = import.meta.env.VITE_BASE44_APP_ID;
  if (envAppId) {
    persistAppId(envAppId);
    return envAppId;
  }

  if (typeof window === 'undefined') return undefined;

  const params = new URLSearchParams(window.location.search);
  const queryAppId = params.get('app_id');
  if (queryAppId) {
    persistAppId(queryAppId);
    return queryAppId;
  }

  const storedAppId = getStoredAppId();
  if (storedAppId) {
    return storedAppId;
  }

  console.error(
    'Base44 app id is not configured. Provide VITE_BASE44_APP_ID or ensure the app_id query parameter is present.'
  );
  return undefined;
}

const appId = resolveAppId();

export const base44 = createClient({
  appId: appId ?? '',
  requiresAuth: true // Ensure authentication is required for all operations
});
