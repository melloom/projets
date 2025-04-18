# Inventory Tracker (Lite)

## Overview
Inventory Tracker (Lite) is a simple application designed to help small businesses and hobbyists manage their inventory. It allows users to track items with their names and counts, adjust stock levels, and highlights low-stock items.

## Features
- List items with name and count
- Adjust stock levels using "+" and "−" buttons
- Low-stock highlighting for items with counts at or below a specified threshold
- Simple user interface with one list screen and one settings screen

## Technologies Used
- React (or Vue)
- localStorage for data persistence

## Project Structure
```
inventory-tracker-lite
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── InventoryList.jsx
│   │   ├── InventoryItem.jsx
│   │   └── SettingsPage.jsx
│   ├── hooks
│   │   └── useLocalStorage.js
│   ├── context
│   │   └── InventoryContext.js
│   ├── styles
│   │   ├── App.css
│   │   └── index.css
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/inventory-tracker-lite.git
   ```
2. Navigate to the project directory:
   ```
   cd inventory-tracker-lite
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- Open the application in your browser.
- Use the "+" and "−" buttons to adjust the stock of each item.
- Set the low-stock threshold in the settings page to highlight items that need restocking.

## License
This project is licensed under the MIT License.