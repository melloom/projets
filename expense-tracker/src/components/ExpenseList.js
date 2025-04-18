import React from 'react';

const ExpenseList = ({ expenses }) => {
    const lastFiveExpenses = expenses.slice(-5);

    return (
        <div>
            <h2>Last 5 Expenses</h2>
            <ul>
                {lastFiveExpenses.map((expense, index) => (
                    <li key={index}>
                        {expense.description} - ${expense.amount} on {expense.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;