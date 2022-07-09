import { EmptyPage, Note } from "../../../components";
import { useNote } from "../../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 8rem auto 0 auto;
  border-color: var(--primary-color);
`;

export function Label(){
    const {noteState: {notes, labels, isNotesLoading}} = useNote();

    return (
        <div className="m-b-4">
            <h2 className="text-title">Labels</h2>
            {isNotesLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : 
            <>
            {labels?.length>0
            ? labels?.map(label=>{
                return <div key={label}>
                    <h3 className="align-subtitle">{label}</h3>
                    {notes.some(note=>note?.labels?.includes(label))
                    ? <div className="notes-container">
                        {notes.filter(note=>note?.labels?.includes(label))
                        .map(note=><Note key={note.id} value={note} />)}
                    </div>
                    : <p className="not-found">No notes found for this label.</p>}
                </div>
            })
            : <EmptyPage/>}
            </>
            }
        </div>
    );
}