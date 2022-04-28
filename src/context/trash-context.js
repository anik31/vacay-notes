import { createContext, useContext, useReducer, useEffect } from "react";
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

const TrashContext = createContext(null);

const TrashProvider = ({ children }) => {
    const [trashState, trashDispatch] = useReducer(trashReducer, []);
    const {user} = useAuth();
  
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
                }
            );

            return () => unsubscribe();
        }
    },[user]);

    const restoreNote = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "trash", note.id));
            await addDoc(collection(db, "users", `${user.uid}`, "notes"), note);
        }
        catch(err){
            console.error(err);
        }
    };
  
    const deleteNotePermanently = async(note) => {
        await deleteDoc(doc(db, "users", `${user.uid}`, "trash", note.id));
    };

    return (
        <TrashContext.Provider value={{ trashState, trashDispatch, restoreNote, deleteNotePermanently}}>
            {children}
        </TrashContext.Provider>
    );
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
