import { createContext, useContext, useReducer, useEffect, useState, ReactNode } from "react";
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
import { getCurrentDateTime } from "../utils";
import { toast } from "react-toastify";
import { NoteReducer, Note, NotePropsType } from "./note-context.types";

const NoteContext = createContext<NotePropsType>(undefined!);

const initialState: NoteReducer = {
    notes:[],
    searchTerm: "",
    labels:[],
    filters: {
        sortByDate: "",
        sortByPriority: "",
        label: []
    },
    isNotesLoading: true
};

const initialNoteState: Note = {
    title:"",
    content:"",
    isPinned: false,        
    labels: [],
    priority: {name:"",value:-1},
    color: "#fff",
    created: getCurrentDateTime()
};

const NoteProvider = ({ children }: {children: ReactNode}) => {
    const [noteState, noteDispatch] = useReducer(noteReducer, initialState);
    const {user} = useAuth();
    const [prevNote, setPrevNote] = useState(initialNoteState);
    const [note, setNote] = useState(initialNoteState);
    const [isNoteUpdate, setIsNoteUpdate] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    useEffect(() => {
        if (user) {
            const unsubscribe1 = onSnapshot(
                collection(db, "users", user.uid, "notes"),
                (snapshot) => {
                    noteDispatch({
                        type: "SET_NOTES",
                        payload: snapshot.docs.map((doc) => ({
                        ...doc.data() as Note,
                        id: doc.id,
                        })),
                    });
                    noteDispatch({type: "SET_NOTES_LOADING", payload: false});
                }
            );

            const unsubscribe2 = user.uid && onSnapshot(
                doc(db, "users", user.uid),
                (snapshot) => {
                  noteDispatch({type: "SET_LABELS", payload: snapshot?.data()?.labels});
                }
            );

            return () => {
                unsubscribe1();
                unsubscribe2 && unsubscribe2();
            }
        }
    },[user]);

    const addNote = async(note: Note) => {
        try{
            await addDoc(collection(db, "users", user.uid, "notes"), note);
            toast.success("Note created"); 
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const updateNote = async(note: Note) => {
        try{
            note.id && await updateDoc(doc(db, "users", user.uid, "notes", note.id), note);
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const deleteNoteFromNotes = async(note: Note) => {
        try{
            note.id && await deleteDoc(doc(db, "users", user.uid, "notes", note.id));
            toast.warning("Note deleted"); 
            await addDoc(collection(db, "users", user.uid, "trash"), note);    
        }catch(err){
            toast.error(err.message);
        }
    };
  
    const addLabel = async(label: string) => {
        const labelRef = doc(db, "users", user.uid);
        try{
            await setDoc(labelRef, {labels: noteState.labels?[...noteState.labels,label]:[label]});
            toast.success("Label created"); 
        }catch(err){
            toast.error(err.message);
        }
    };



    return (
        <NoteContext.Provider value={{ 
            noteState, noteDispatch,
            note, setNote, initialNoteState,
            prevNote, setPrevNote, 
            isExpanded, setIsExpanded,
            isNoteUpdate, setIsNoteUpdate, 
            addNote, updateNote, deleteNoteFromNotes, addLabel }}>
            {children}
        </NoteContext.Provider>
    );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
