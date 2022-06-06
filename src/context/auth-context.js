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
    try{
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      setIsLoggedIn(true);
      navigate(location?.state?.from?.pathname || "/home");
    }catch(err){
      toast.error(err.message);
    }
  };

  const signUpUser = async(email, password) => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful");
      setIsLoggedIn(true);
      navigate(location?.state?.from?.pathname || "/home");
    }catch(err){
      toast.error(err.message);
    }
  };

  const logoutUser = async() => {
    try{
      await signOut(auth);
      toast.info("Logged out");
      navigate("/");
      setIsLoggedIn(false);
    }catch(err){
      toast.error(err.message);
    }
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