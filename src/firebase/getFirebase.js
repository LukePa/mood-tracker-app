import { initializeApp } from 'firebase/app';

let app;

const firebaseConfig = {
    apiKey: "AIzaSyAljmiXv7sCaurV5abkD80b8PEWBDIx2AQ",
    authDomain: "mood-tracker-d1-364818.firebaseapp.com",
    projectId: "mood-tracker-d1-364818",
    storageBucket: "mood-tracker-d1-364818.appspot.com",
    messagingSenderId: "106211566301",
    appId: "1:106211566301:web:ece7e59cfc4f4497867134",
    measurementId: "G-RKJMLLM2KJ"
  };

const getFirebase = () => {
    if (!app) {
        const app = initializeApp(firebaseConfig);
    }

    return app;
}

export default getFirebase;