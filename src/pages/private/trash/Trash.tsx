import { Note, EmptyPage } from "../../../components";
import { useTrash } from "../../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 8rem auto 0 auto;
  border-color: var(--primary-color);
`;

export function Trash(){
    const {trashState, isTrashLoading} = useTrash();

    return (
        <div>
            <h2 className="text-title">Trash</h2>
            {isTrashLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {trashState.length>0
            ? <div className="notes-container m-b-4">
                {trashState.map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <EmptyPage/>
            }
            </>
            }
        </div>
    );
}