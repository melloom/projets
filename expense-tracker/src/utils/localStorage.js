export const saveExpenses = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
};

export const getExpenses = () => {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : [];
};

export const deleteExpenses = () => {
    localStorage.removeItem('expenses');
};