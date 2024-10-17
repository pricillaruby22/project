// src/SignupPage.jsx
import React, { useState } from 'react';
import { signInWithGoogle } from './googleSignIn'; // Ensure correct path

const SignupPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default button behavior
    setLoading(true); // Set loading state to true
    await signInWithGoogle(); // Call the sign-in function
    setLoading(false); // Reset loading state
  };

  return (
    <div>
      <button onClick={handleSignIn} disabled={loading}>
        {loading ? 'Signing in...' : 'Continue with Google'}
      </button>
    </div>
  );
};

export default SignupPage;
