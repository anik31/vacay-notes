import { createContext, useContext, useReducer, useEffect } from "react";
import {db} from "../config/firebase-config";
import {
    updateDoc,
    deleteDoc,
    doc,
    addDoc,
    collection,
    onSnapshot,
    setDoc
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

    useEffect(() => {
        if (user) {
            const unsubscribe1 = onSnapshot(
                collection(db, "users", `${user.uid}`, "notes"),
                (snapshot) => {
                noteDispatch({
                    type: "SET_NOTES",
                    payload: snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    })),
                });
                }
            );

            const unsubscribe2 = onSnapshot(
                doc(db, "users", user.uid),
                (snapshot) => {
                  noteDispatch({
                    type: "SET_LABELS",
                    payload: snapshot.data().labels
                  });
                }
            );

            return () => {
                unsubscribe1();
                unsubscribe2();
            }
        }
    },[user]);

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
        const labelRef = doc(db, "users", `${user.uid}`);
        try{
            await setDoc(labelRef, {labels: noteState.labels?[...noteState.labels,label]:[label]});
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
