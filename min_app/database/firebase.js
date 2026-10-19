import { getApp, getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Konfigurationen identificerer SamBud-projektet i Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyDw1WJ_1t8tGd6N_UDxjJDvFm9wca0MzVE',
  authDomain: 'sambud-firebase-inno.firebaseapp.com',
  projectId: 'sambud-firebase-inno',
  storageBucket: 'sambud-firebase-inno.firebasestorage.app',
  messagingSenderId: '614115273679',
  appId: '1:614115273679:web:b0e93845738cb599abc0ba',
};

// Genbruger en eksisterende Firebase-app, hvis modulet bliver importeret flere gange.
export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Forbinder appen til projektets Realtime Database i Belgium-regionen.
export const rtdb = getDatabase(
  firebaseApp,
  'https://sambud-firebase-inno-default-rtdb.europe-west1.firebasedatabase.app',
);
