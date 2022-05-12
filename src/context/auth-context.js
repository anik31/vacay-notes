import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const loginUser = async(email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Welcome back, you are logged in!!");
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname || "/home");
  };

  const signUpUser = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Congrats, you have signed up successfully!!");
    setIsLoggedIn(true);
    navigate(location?.state?.from?.pathname || "/home");
  };

  const logoutUser = async() => {
    await signOut(auth);
    toast.success("Logged out successfully");
    navigate("/");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedInUser => setUser(loggedInUser));
    return () => unsubscribe();
  }, []);

  useEffect(()=>{
    if(user){
      setIsLoggedIn(true);
    }
  },[user]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loginUser, signUpUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };