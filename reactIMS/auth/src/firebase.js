
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCj58-3QpsLfBJaggFfIpVw_7IrB0FEFd0",
    authDomain: "auth-b6c8b.firebaseapp.com",
    projectId: "auth-b6c8b",
    storageBucket: "auth-b6c8b.appspot.com",
    messagingSenderId: "1079672368541",
    appId: "1:1079672368541:web:84f609a3e6b0708d3dd374",
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();



