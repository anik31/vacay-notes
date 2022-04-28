import { useNote } from "../../context";
import "./colorPallete.css";

const colorPallete = ["#fff","#fecaca","#fde68a","#d9f99d"]

export function ColorPallete({setIsColorPalleteOpen}){
    const {setNote} = useNote();

    const colorPalleteHandler = (e) =>{
        setIsColorPalleteOpen(false);
        setNote(prev=>({...prev,color:e.target.dataset.color}));
    };

    return (
        <div className="color-pallete">
            {colorPallete.map(color=> 
            <span key={color} data-color={color} onClick={colorPalleteHandler} 
            style={{backgroundColor: color}}></span>)}
        </div>
    );
}