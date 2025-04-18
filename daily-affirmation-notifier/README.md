# Daily Affirmation Notifier

## Overview
The Daily Affirmation Notifier is a simple mental wellness tool designed to provide users with uplifting messages. Upon loading the application, users will see a random affirmation from a predefined list. The application allows users to view the next affirmation or mark their favorites.

## Features
- Displays a random uplifting message on load.
- Option to view the next affirmation.
- Ability to favorite affirmations for later viewing.
- Lightweight and requires no backend infrastructure.

## Project Structure
```
daily-affirmation-notifier
├── src
│   ├── index.html        # Main HTML document
│   ├── style.css         # Styles for the application
│   ├── app.js            # Main JavaScript logic
│   └── data
│       └── affirmations.js # Hard-coded affirmations
├── assets
│   └── favicon.svg       # Favicon for the application
├── README.md             # Project documentation
└── package.json          # npm configuration file
```

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/daily-affirmation-notifier.git
   ```
2. Navigate to the project directory:
   ```
   cd daily-affirmation-notifier
   ```
3. Open `src/index.html` in your web browser to view the application.

## Usage
- Upon loading, a random affirmation will be displayed.
- Click "Next" to see another affirmation.
- Click "Favorite" to save your favorite affirmations in local storage.

## License
This project is open-source and available under the MIT License.