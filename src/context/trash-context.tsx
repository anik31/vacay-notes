import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from "react";
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
import { Note } from "./note-context.types";
import { TrashPropType } from "./trash-context.types";

const TrashContext = createContext<TrashPropType>(undefined!);

const TrashProvider = ({ children }: {children: ReactNode}) => {
    const [trashState, trashDispatch] = useReducer(trashReducer, []);
    const {user} = useAuth();
    const [isTrashLoading, setIsTrashLoading] = useState(true);

    useEffect(() => {
        if (user) {
            const unsubscribe = onSnapshot(
                collection(db, "users", user.uid, "trash"),
                (snapshot) => {
                    trashDispatch({
                        type: "SET_TRASH",
                        payload: snapshot.docs.map((doc) => ({
                        ...doc.data() as Note,
                        id: doc.id,
                        })),
                    });
                    setIsTrashLoading(false);
                }
            );

            return () => unsubscribe();
        }
    },[user]);

    const restoreNote = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users", user.uid, "trash", note.id));
            toast.success("Note restored"); 
            await addDoc(collection(db, "users", `${user.uid}`, "notes"), note);
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const deleteNotePermanently = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users", user.uid, "trash", note.id));
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
