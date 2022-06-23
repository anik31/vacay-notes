import {MouseEvent} from "react";
import { useNote } from "../../context";
import "./colorPallete.css";

const colorPallete = ["#fff","#fecaca","#fde68a","#d9f99d"]

type ColorPalleteProp = {setIsColorPalleteOpen: (value:boolean) => void};

export function ColorPallete({setIsColorPalleteOpen}: ColorPalleteProp){
    const {setNote} = useNote();

    const colorPalleteHandler = (e: MouseEvent) =>{
        setIsColorPalleteOpen(false);
        setNote(prev =>({...prev, color:(e.target as HTMLSpanElement).dataset.color as string}));
    };

    return (
        <div className="color-pallete">
            {colorPallete.map(color=> 
            <span key={color} data-color={color} onClick={colorPalleteHandler} 
            style={{backgroundColor: color}}></span>)}
        </div>
    );
}