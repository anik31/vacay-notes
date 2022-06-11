import { EmptyPage, Note } from "../../../components";
import { useArchive } from "../../../context";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 8rem auto 0 auto;
  border-color: var(--primary-color);
`;

export function Archive(){
    const {archiveState, isArchiveLoading} = useArchive();

    return (
        <div>
            <h2 className="text-title">Archive</h2>
            {isArchiveLoading
            ? <MoonLoader color={`var(--primary-color)`} css={override} size={60}/>
            : <>
            {archiveState.length>0
            ? <div className="notes-container m-b-4">
                {archiveState.map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <EmptyPage/>
            }
            </>
            }
        </div>
    );
}