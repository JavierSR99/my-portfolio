import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAtSQ2PBy1PmNGkZy3UJIK17StCHakVy9w",
    authDomain: "mi-portfolio-a9e38.firebaseapp.com",
    projectId: "mi-portfolio-a9e38",
    storageBucket: "mi-portfolio-a9e38.appspot.com",
    messagingSenderId: "140266667991",
    appId: "1:140266667991:web:7af9634e243a0e4b831592"
  }
};

const app = initializeApp(environment.firebase);