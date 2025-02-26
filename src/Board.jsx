import { useState } from "react"; 

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if(squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
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