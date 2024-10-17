// src/googleSignIn.js
import { auth, googleProvider } from './firebase'; // Ensure correct path

import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup
export const signInWithGoogle = async () => {
  try {
    console.log("Attempting to sign in with Google...");
    const result = await signInWithPopup(auth, googleProvider); // Use signInWithPopup correctly
    console.log("Sign in successful!", result.user);
    return result.user; // Return user object if needed
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};
