# Tip Calculator

A simple tip calculator that allows users to enter a bill total and a tip percentage to calculate the tip amount and the grand total. This application is built using React and utilizes localStorage to remember the last used tip percentage.

## Features

- Enter bill total and tip percentage.
- Displays the calculated tip amount and grand total.
- Remembers the last used tip percentage using localStorage.
- Responsive and user-friendly interface.

## Project Structure

```
tip-calculator
├── src
│   ├── App.js
│   ├── components
│   │   ├── Calculator.js
│   │   └── TipDisplay.js
│   ├── styles
│   │   └── styles.css
│   ├── utils
│   │   └── localStorage.js
│   └── index.js
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tip-calculator.git
   ```
2. Navigate to the project directory:
   ```
   cd tip-calculator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.
3. Enter the bill total and tip percentage to see the calculated tip and grand total.

## License

This project is licensed under the MIT License.