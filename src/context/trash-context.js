import { createContext, useContext, useReducer, useEffect, useState } from "react";
import {db} from "../config/firebase-config";
import {
    deleteDoc,
    doc,
    addDoc,
    collection,
    onSnapshot
  } from "firebase/firestore";
  import {trashReducer} from "../reducer";
  import {useAuth} from "./auth-context";
  import { toast } from "react-toastify";

const TrashContext = createContext(null);

const TrashProvider = ({ children }) => {
    const [trashState, trashDispatch] = useReducer(trashReducer, []);
    const {user} = useAuth();
    const [isTrashLoading, setIsTrashLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const unsubscribe = onSnapshot(
                collection(db, "users", `${user.uid}`, "trash"),
                (snapshot) => {
                    trashDispatch({
                        type: "SET_TRASH",
                        payload: snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                        })),
                    });
                    setIsTrashLoading(false);
                }
            );

            return () => unsubscribe();
        }
    },[user]);

    const restoreNote = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "trash", note.id));
            toast.success("Note restored"); 
            await addDoc(collection(db, "users", `${user.uid}`, "notes"), note);
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const deleteNotePermanently = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "trash", note.id));
            toast.error("Note deleted permanently"); 
        }catch(err){
            toast.error(err.message);
        }
    };

    return (
        <TrashContext.Provider value={{ trashState, trashDispatch, isTrashLoading,
        restoreNote, deleteNotePermanently}}>
            {children}
        </TrashContext.Provider>
    );
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
