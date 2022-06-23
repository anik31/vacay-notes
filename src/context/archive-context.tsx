import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from "react";
import {db} from "../config/firebase-config";
import {
    deleteDoc,
    doc,
    addDoc,
    collection,
    onSnapshot
  } from "firebase/firestore";
  import {archiveReducer} from "../reducer";
  import {useAuth} from "./auth-context";
  import { toast } from "react-toastify";  
import { ArchivePropType } from "./archive-context.types";
import { Note } from "./note-context.types";

const ArchiveContext = createContext<ArchivePropType>(undefined!);

const ArchiveProvider = ({ children }: {children: ReactNode}) => {
    const [archiveState, archiveDispatch] = useReducer(archiveReducer, []);
    const {user} = useAuth();
    const [isArchiveLoading, setIsArchiveLoading] = useState(true);
    
    useEffect(() => {
        if (user.uid) {
            const unsubscribe = onSnapshot(
                collection(db, "users", user.uid, "archive"),
                (snapshot) => {
                    archiveDispatch({
                        type: "SET_ARCHIVE",
                        payload: snapshot.docs.map((doc) => ({
                        ...doc.data() as Note,
                        id: doc.id,
                    })),
                });
                setIsArchiveLoading(false);
                }
            );

            return () => unsubscribe();
        }
    },[user]);

    const archiveNote = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users",user.uid, "notes", note.id));
            toast.info("Note archived"); 
            await addDoc(collection(db, "users", user.uid, "archive"), note);
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const unarchiveNote = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users", user.uid, "archive", note.id));
            toast.success("Note un-archived"); 
            await addDoc(collection(db, "users", user.uid, "notes"), note);
        }catch(err){
            toast.error(err.message);
        }
    };

    const deleteNoteFromArchive = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users", user.uid, "archive", note.id));
            toast.warning("Note deleted"); 
            await addDoc(collection(db, "users", user.uid, "trash"), note);
        }catch(err){
            toast.error(err.message);
        }
    };

    return (
        <ArchiveContext.Provider value={{ archiveState, archiveDispatch, isArchiveLoading,
        archiveNote, unarchiveNote, deleteNoteFromArchive }}>
            {children}
        </ArchiveContext.Provider>
    );
};

const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
