import { useState } from "react"; 

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (index) => {
        if(squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = "X"
        setSquares(newSquares);
    }

    return (
        <div className="board">
            {squares.map((value, index) => (
                <button key={index} className="square" onClick={() => handleClick(index)}>
                    {value}
                </button>
            ))}
        </div>
    )
}

export default Board;