import "./colorPallete.css";

const colorPallete = ["#fff","#f87171","#facc15","#38bdf8"]

export function ColorPallete({setIsColorPalleteOpen}){
    return (
        <div className="color-pallete">
            {colorPallete.map(color=> 
            <span key={color} onClick={()=>setIsColorPalleteOpen(false)} 
            style={{backgroundColor: color}}></span>)}
        </div>
    );
}