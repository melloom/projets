import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import { saveExpensesToLocalStorage, getExpensesFromLocalStorage } from '../utils/localStorage';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const storedExpenses = getExpensesFromLocalStorage();
        if (storedExpenses) {
            setExpenses(storedExpenses);
        }
    }, []);

    const addExpense = (expense) => {
        const updatedExpenses = [...expenses, expense];
        setExpenses(updatedExpenses);
        saveExpensesToLocalStorage(updatedExpenses);
    };

    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const lastFiveExpenses = expenses.slice(-5);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseSummary totalAmount={totalAmount} />
            <ExpenseList expenses={lastFiveExpenses} />
        </div>
    );
};

export default App;