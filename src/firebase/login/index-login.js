// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALEDF3NFqtbamaUuB3lZyOX_voxvrOTBw',
  authDomain: 'rm-games-5dedb.firebaseapp.com',
  projectId: 'rm-games-5dedb',
  storageBucket: 'rm-games-5dedb.firebasestorage.app',
  messagingSenderId: '250477589435',
  appId: '1:250477589435:web:7644218e19c3fd52894a9e',
  measurementId: 'G-CWKBEPZBPZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
