import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIRST_APP,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIRST_APP,
  projectId: process.env.REACT_APP_PROJECT_ID_FIRST_APP,
  databaseURL: process.env.REACT_APP_FIRESTORE_DB_URL_FIRST_APP,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FIRST_APP,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_FIRST_APP,
  appId: process.env.REACT_APP_APP_ID_FIRST_APP,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID_FIRST_APP,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
