import "./style.css";
import pawnImage from "../assets/icons/chess-solder.svg"

const Grid = () => {
    return (
        <div className="grid-container">
            {[...Array(64)].map((_val,i)=>
            {
                let indexArray = [i % 8, Math.floor(i / 8)];
                return(
                    <div style=
                    {
                        {
                        backgroundColor: (indexArray[1] + indexArray[0])  % 2 ? "#444" : "#ddd" ,
                        color: (indexArray[1] + indexArray[0])  % 2 ? "#ddd" : "#444",
                        
                    }
                    }>
                        {//indexArray[1] + " , " + indexArray[0]}
            }
                        {indexArray[1] === 1 && <img className="chess_piece" src={pawnImage} alt="" />}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Grid
