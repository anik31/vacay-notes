import { createContext, useContext, useReducer } from "react";
import {db} from "../config/firebase-config";
import {
    updateDoc,
    deleteDoc,
    doc,
    addDoc,
    collection
  } from "firebase/firestore";
  import {noteReducer} from "../reducer";
import {useAuth} from "./auth-context";

const NoteContext = createContext(null);

const initialState = {
    notes:[],
    labels:[],
    filters: {
        sortByDate: "",
        sortByPriority: "",
        label: []
    }
};

const NoteProvider = ({ children }) => {
    const [noteState, noteDispatch] = useReducer(noteReducer, initialState);
    const {user} = useAuth();
  
    const addNote = async(note) => {
        try{
            await addDoc(collection(db, "users", `${user.uid}`, "notes"), note);
        }
        catch(err){
            console.error(err);
        }
    };
  
    const updateNote = async(note) => {
        try{
            await updateDoc(doc(db, "users", `${user.uid}`, "notes", note.id), note);
        }
        catch(err){
            console.error(err);
        }
    };
  
    const deleteNoteFromNotes = async(note) => {
        try{
            await deleteDoc(doc(db, "users", `${user.uid}`, "notes", note.id));
            await addDoc(collection(db, "users", `${user.uid}`, "trash"), note);
        }
        catch(err){
            console.error(err);
        }
    };
  
    const addLabel = async(label) => {
        try{
            await addDoc(collection(db, "users", `${user.uid}`, "labels"), label);
        }
        catch(err){
            console.error(err);
        }
    };

    return (
        <NoteContext.Provider value={{ noteState, noteDispatch, addNote, updateNote, deleteNoteFromNotes, addLabel }}>
            {children}
        </NoteContext.Provider>
    );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
