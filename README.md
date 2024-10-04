Tic-Tac-Toe Game
This project is a modern and interactive Tic-Tac-Toe game built with React and Tailwind CSS. The game features a clean, minimalist design and user-friendly interface. This is a great project for beginners to learn React state management and conditional rendering, with added style using Tailwind CSS for a polished look.

Demo
You can access the live demo of the game here (replace # with your deployed URL if available).

Features
Interactive Gameplay: Users can play as "X" or "O" in a 3x3 grid.
Win Detection: Automatically detects the winner with a winning message.
Time Travel: Allows players to go back to any previous moves and replay from that point.
Responsive Design: Responsive layout with modern animations and effects powered by Tailwind CSS.
Clean, Modular Code: The project follows best practices in React and is organized into reusable components.
Technologies Used
React: For component-based architecture and state management.
Tailwind CSS: For rapid, custom styling.
JavaScript: For implementing the game logic and event handling.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/mdratul47782/tic-tac-toe-game.git
Navigate into the project directory:

bash
Copy code
cd tic-tac-toe-game
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Code Structure
The project is divided into the following main components:

Square Component: Renders each cell in the Tic-Tac-Toe grid and handles click events.
Board Component: Manages the grid layout and game state, including turn tracking and winner detection.
Game Component: Manages the overall game, including history tracking and the ability to navigate to previous moves.
Code Example
Below is a quick example of how to create the Square component:

javascript
Copy code
function Square({ value, onSquareClick }) {
return (
<button className="bg-gray-100 border h-16 w-16 m-1 text-2xl"
                onClick={onSquareClick}>
{value}
</button>
);
}
Game Logic
The game logic is handled by the calculateWinner function, which checks each row, column, and diagonal for matching values to determine the winner. State is maintained using React’s useState for player turns and game history.

Usage
Gameplay:

Click on any cell in the 3x3 grid to place your mark ("X" or "O").
The game automatically switches turns between players and displays the current turn.
The game announces the winner once three consecutive marks are aligned.
Time Travel:

Use the move list on the right side to jump to any previous state in the game, which will reset the board to that move.
Folder Structure
scss
Copy code
tic-tac-toe-game/
├── public/
├── src/
│ ├── components/
│ │ ├── Square.js
│ │ ├── Board.js
│ │ └── Game.js
│ ├── App.js
│ └── index.js
└── README.md
Tailwind CSS Customization
The game utilizes Tailwind CSS for modern styling and responsiveness.
Key customizations include hover effects, box shadows, grayscale effects, and button animations.
Adjustments to the grid and button designs create a minimalist look that’s easy to navigate.
Contributing
Contributions are welcome! If you’d like to contribute:

Fork the repository.
Create a new branch.
Make your changes and commit them.
Submit a pull request for review.
License
This project is open-source and available under the MIT License.

Contact
For any questions, feel free to reach out:

Name: Md.Ratul
Email: mdratul47782@.com
