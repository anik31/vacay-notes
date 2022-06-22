import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthPropsType, LocationState, User } from "./auth-context.types";

const AuthContext = createContext<AuthPropsType>(undefined!);

const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState<User>({email: "", uid: ""});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  
  const loginUser = async(email: string, password: string) => {
    try{
      setIsAuthLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      setIsLoggedIn(true);
      navigate((location?.state as LocationState)?.from?.pathname || "/home");
    }catch(err){
      toast.error(err.message);
    }finally{
      setIsAuthLoading(false);
    }
  };

  const signUpUser = async(email: string, password: string) => {
    try{
      setIsAuthLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful");
      setIsLoggedIn(true);
      navigate((location?.state as LocationState)?.from?.pathname || "/home");
    }catch(err){
      toast.error(err.message);
    }finally{
      setIsAuthLoading(false);
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
    const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
      const email = loggedInUser?.email;
      const uid = loggedInUser?.uid;
      email && uid && setUser({email, uid})
    });
    return () => unsubscribe();
  }, []);

  useEffect(()=>{
    if(user){
      setIsLoggedIn(true);
    }
  },[user]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAuthLoading, loginUser, signUpUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };