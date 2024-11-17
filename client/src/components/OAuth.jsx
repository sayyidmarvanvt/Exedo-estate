import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess, signUpSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(
        "https://real-estate-server-yqaq.onrender.com/api/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      dispatch(signInSuccess(data));
      dispatch(signUpSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
//here we add type='button' for not to sumbit on form
