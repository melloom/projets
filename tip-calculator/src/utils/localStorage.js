function setLastTipPercentage(tipPercentage) {
    localStorage.setItem('lastTipPercentage', tipPercentage);
}

function getLastTipPercentage() {
    return localStorage.getItem('lastTipPercentage') || 0;
}

export { setLastTipPercentage, getLastTipPercentage };