import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

//you have to paste youre supabase key here
const supabaseUrl = 'https://wmupmcsnovqlqwpqucav.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdXBtY3Nub3ZxbHF3cHF1Y2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NDc0MTMsImV4cCI6MjA0MTAyMzQxM30.xYSIp9yYWn4TIqzSLREewRspq_7OzTdakRp7hZK6drc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});