import { createContext, useContext, useReducer } from "react";
import {db} from "../config/firebase-config";
import {
    deleteDoc,
    doc,
    addDoc,
    collection,
  } from "firebase/firestore";
  import {archiveReducer} from "../reducer";
  import {useAuth} from "./auth-context";

const ArchiveContext = createContext(null);

const ArchiveProvider = ({ children }) => {
    const [archiveState, archiveDispatch] = useReducer(archiveReducer, []);
    const {user} = useAuth();
  
    const archiveNote = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "notes", note.id));
            await addDoc(collection(db, "users", `${user.uid}`, "archive"), note);
        }
        catch(err){
            console.error(err);
        }
    };
  
    const unarchiveNote = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "archive", note.id));
            await addDoc(collection(db, "users", `${user.uid}`, "notes"), note);
        }
        catch(err){
            console.error(err);
        }
    };

    const deleteNoteFromArchive = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "archive", note.id));
            await addDoc(collection(db, "users", `${user.uid}`, "trash"), note);
        }
        catch(err){
            console.error(err);
        }
    };

    return (
        <ArchiveContext.Provider value={{ archiveState, archiveDispatch, archiveNote, unarchiveNote, deleteNoteFromArchive }}>
            {children}
        </ArchiveContext.Provider>
    );
};

const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
