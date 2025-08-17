# 🎯 Guess My Number!

A fun and interactive number guessing game built with vanilla JavaScript, HTML, and CSS. Test your luck and intuition by guessing a secret number between 1 and 20!

## 🎮 Game Overview

**Guess My Number** is a simple yet engaging browser-based game where players attempt to guess a randomly generated secret number. The game features a scoring system, visual feedback, and tracks your highest score across multiple rounds.

## ✨ Features

- **Random Number Generation**: Secret number between 1-20 generated for each game
- **Score System**: Start with 20 points, lose points for incorrect guesses
- **High Score Tracking**: Keeps track of your best performance
- **Visual Feedback**: Dynamic background colors and UI changes based on game state
- **Responsive Design**: Clean, retro-style interface with Google Fonts
- **Game Reset**: Play multiple rounds with the "Again!" button

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing immediately!

```bash
# If using git
git clone <repository-url>
cd guess-my-number-dom-project

# Then open index.html in your browser
```

## 🎯 How to Play

1. **Start the Game**: The game begins with a secret number already generated
2. **Make Your Guess**: Enter a number between 1 and 20 in the input field
3. **Check Your Answer**: Click the "Check!" button to submit your guess
4. **Receive Feedback**: 
   - "Too High!" - Your guess is above the secret number
   - "Too Low!" - Your guess is below the secret number
   - "Correct Number!" - You've won!
5. **Track Your Score**: Each wrong guess reduces your score by 1
6. **Game Over**: If your score reaches 0, the game ends
7. **Play Again**: Click "Again!" to start a new round

## 🎨 Visual States

- **Default**: Dark theme with gray background
- **Victory**: Green background when you guess correctly
- **Game Over**: Red background when you run out of points
- **Number Reveal**: The secret number box expands to show the answer

## 🛠️ Technical Details

### Project Structure

```
guess-my-number-dom-project/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Game logic and DOM manipulation
├── .prettierrc         # Code formatting configuration
├── jsconfig.json       # JavaScript project configuration
└── README.md           # Project documentation
```

### Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with Google Fonts (Press Start 2P)
- **Vanilla JavaScript**: Game logic and DOM manipulation
- **ES6+ Features**: Modern JavaScript syntax

### Key JavaScript Concepts Demonstrated

- DOM Manipulation
- Event Listeners
- Conditional Logic
- Function Declarations
- Variable Scoping
- Math.random() for number generation

## 🔧 Development

### Code Style

The project uses Prettier for code formatting with the following configuration:
- Single quotes for strings
- Arrow functions without parentheses for single parameters

### Browser Compatibility

- Modern browsers with ES2020 support
- No external dependencies or frameworks required

## 🎯 Game Logic

The game implements the following core mechanics:

1. **Number Generation**: `Math.trunc(Math.random() * 20) + 1`
2. **Score Management**: Decremental scoring system starting at 20
3. **High Score Persistence**: Tracks best score during session
4. **Input Validation**: Handles empty inputs and invalid entries
5. **Game State Management**: Tracks win/lose conditions

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Report bugs or issues
- Suggest new features
- Improve the code structure
- Enhance the user interface

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 Learning Objectives

This project demonstrates:

- DOM manipulation techniques
- Event-driven programming
- Game state management
- CSS styling and responsive design
- JavaScript best practices
- Code organization and structure

---

**Enjoy the game and happy guessing! 🎲**