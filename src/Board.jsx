import { useState } from "react"; 

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; 
            }
        }
        return null; 
    };

    const winner = calculateWinner(squares);

    const handleClick = (index) => {
        if(squares[index]) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    }

    return (
        <>
            <h2>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}</h2>
            <div className="board">
                {squares.map((value, index) => (
                    <button key={index} className="square" onClick={() => handleClick(index)}>
                        {value}
                    </button>
                ))}
            </div>
        </>
        
    )
}

export default Board;