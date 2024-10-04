import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button
            className="bg-gray-100 border border-gray-300 h-16 w-16 m-1 text-2xl font-semibold flex items-center justify-center
                        transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 shadow-md hover:shadow-lg"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    return (
        <>
            <div className="text-lg font-semibold mb-4">{status}</div>
            <div className="grid grid-cols-3 gap-1">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
                ))}
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((_, move) => {
        const description = move > 0 ? `Go to move #${move}` : "Go to start";
        return (
            <li key={move} className="mb-2">
                <button
                    onClick={() => jumpTo(move)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="flex justify-center items-start gap-10 p-8 bg-gray-100 min-h-screen">
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div>
                <ol className="text-lg">{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
