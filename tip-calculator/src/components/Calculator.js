const { useState, useEffect } = require('react');
import { getLastTipPercentage, setLastTipPercentage } from '../utils/localStorage';

const Calculator = ({ onCalculate }) => {
    const [billTotal, setBillTotal] = useState('');
    const [tipPercentage, setTipPercentage] = useState(getLastTipPercentage() || 15);
    
    useEffect(() => {
        setLastTipPercentage(tipPercentage);
    }, [tipPercentage]);

    const handleBillChange = (e) => {
        setBillTotal(e.target.value);
    };

    const handleTipChange = (e) => {
        setTipPercentage(e.target.value);
    };

    const calculateTip = () => {
        const total = parseFloat(billTotal) || 0;
        const tip = (total * (tipPercentage / 100)).toFixed(2);
        const grandTotal = (total + parseFloat(tip)).toFixed(2);
        onCalculate(tip, grandTotal);
    };

    return (
        <div>
            <h2>Tip Calculator</h2>
            <input
                type="number"
                placeholder="Bill Total"
                value={billTotal}
                onChange={handleBillChange}
            />
            <input
                type="number"
                placeholder="Tip Percentage"
                value={tipPercentage}
                onChange={handleTipChange}
            />
            <button onClick={calculateTip}>Calculate</button>
        </div>
    );
};

export default Calculator;