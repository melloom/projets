import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import TipDisplay from './components/TipDisplay';
import { getLastTipPercentage, setLastTipPercentage } from './utils/localStorage';
import './styles/styles.css';

const App = () => {
    const [billTotal, setBillTotal] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(getLastTipPercentage() || 15);
    const [tipAmount, setTipAmount] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const calculatedTip = (billTotal * tipPercentage) / 100;
        setTipAmount(calculatedTip);
        setGrandTotal(billTotal + calculatedTip);
        setLastTipPercentage(tipPercentage);
    }, [billTotal, tipPercentage]);

    return (
        <div className="app">
            <h1>Tip Calculator</h1>
            <Calculator 
                billTotal={billTotal} 
                setBillTotal={setBillTotal} 
                tipPercentage={tipPercentage} 
                setTipPercentage={setTipPercentage} 
            />
            <TipDisplay tipAmount={tipAmount} grandTotal={grandTotal} />
        </div>
    );
};

export default App;