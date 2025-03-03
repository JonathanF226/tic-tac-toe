import { useState } from "react"; 

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [xWins, setXWins] = useState(0);
    const [oWins, setOWins] = useState(0);
    const [winner, setWinner] = useState(null);

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

    const handleClick = (index) => {
        if (squares[index] || winner) return;

        const newSquares = [...squares];
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);

        const gameWinner = calculateWinner(newSquares);
        if (gameWinner) {
            setWinner(gameWinner);
            if (gameWinner === "X") setXWins(prev => prev + 1);
            if (gameWinner === "O") setOWins(prev => prev + 1);
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    const isDraw = !winner && squares.every(square => square !== null);

    return (
        <>
            <h2>{winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${isXNext ? "X" : "O"}`}</h2>
            <p>🏆 X Wins: {xWins} | O Wins: {oWins} 🏆</p>
            <div className="board">
                {squares.map((value, index) => (
                    <button key={index} className="square" onClick={() => handleClick(index)}>
                        {value}
                    </button>
                ))}
            </div>
            <button className="reset-button" onClick={resetGame}>Restart Game</button>
        </>
        
    )
}

export default Board;