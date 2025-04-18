import React from 'react';

const ExpenseSummary = ({ totalAmount }) => {
    return (
        <div className="expense-summary">
            <h2>Expense Summary</h2>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        </div>
    );
};

export default ExpenseSummary;