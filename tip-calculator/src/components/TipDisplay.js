import React from 'react';

const TipDisplay = ({ tipAmount, grandTotal }) => {
    return (
        <div className="tip-display">
            <h2>Tip Amount: ${tipAmount.toFixed(2)}</h2>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default TipDisplay;