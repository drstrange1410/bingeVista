import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDD7C0HPcvcMgfjNjQXuVqAnfVMTKCiMYY',
  authDomain: 'netflix-clone-7e484.firebaseapp.com',
  projectId: 'netflix-clone-7e484',
  storageBucket: 'netflix-clone-7e484.appspot.com',
  messagingSenderId: '353865044511',
  appId: '1:353865044511:web:8fc39e812fd7d0659b7b2a',
  measurementId: 'G-3FRJF1F9XQ',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
