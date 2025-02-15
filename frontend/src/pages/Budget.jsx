import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../styles/Budget.css';

const Budget = ({ toggleSidebar, isSidebarOpen }) => {
  const [budget, setBudget] = useState(0);
  const [currency, setCurrency] = useState('LKR');
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: '' });
  const [exchangeRate, setExchangeRate] = useState(1);
  const [showSuggestionPlan, setShowSuggestionPlan] = useState(false);

  useEffect(() => {
    // Simulating exchange rate fetch (replace with actual API call)
    setExchangeRate(320); // 1 USD = 320 LKR (example rate)
  }, []);

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value) || 0);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount && newExpense.category) {
      setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
      setNewExpense({ description: '', amount: '', category: '' });
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  const convertCurrency = (amount) => {
    return currency === 'USD' ? amount * exchangeRate : amount;
  };

  const getBudgetSuggestion = () => {
    const totalBudget = convertCurrency(budget);
    if (totalBudget < 50000) return "Budget is tight. Focus on essential expenses only.";
    if (totalBudget < 100000) return "Moderate budget. Plan carefully for accommodation and activities.";
    return "Comfortable budget. Enjoy a range of activities and dining experiences.";
  };

  const handleGetSuggestionPlan = () => {
    setShowSuggestionPlan(true);
  };

  const renderSuggestionPlan = () => {
    const totalBudgetLKR = convertCurrency(budget);
    const categories = [
      { name: 'Accommodation', percentage: 0.4, color: '#FFD700', suggestion: 'Mix of budget hotels and guesthouses' },
      { name: 'Food', percentage: 0.2, color: '#98FB98', suggestion: 'Local restaurants and street food' },
      { name: 'Transportation', percentage: 0.15, color: '#87CEFA', suggestion: 'Public buses and occasional tuk-tuks' },
      { name: 'Activities', percentage: 0.2, color: '#FFA07A', suggestion: 'Mix of free and paid attractions' },
      { name: 'Miscellaneous', percentage: 0.05, color: '#DDA0DD', suggestion: 'Souvenirs and emergency fund' },
    ];

    return (
      <div className="suggestion-plan">
        <h2>Suggested Travel Plan for Sri Lanka</h2>
        {categories.map((category, index) => (
          <div key={index} className="plan-item" style={{backgroundColor: category.color}}>
            <h3>{category.name}</h3>
            <p>Budget: LKR {Math.round(totalBudgetLKR * category.percentage).toLocaleString()}</p>
            <p>Suggestion: {category.suggestion}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`budget-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main className="budget-main">
        <h1>Budget Tracker</h1>
        <div className="budget-overview">
          <div className="budget-item">
            <h2>Total Budget</h2>
            <input
              type="number"
              value={budget}
              onChange={handleBudgetChange}
              placeholder="Enter your budget"
            />
            <select value={currency} onChange={handleCurrencyChange}>
              <option value="LKR">LKR</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className="budget-item">
            <h2>Total Expenses</h2>
            <p>{currency === 'LKR' ? 'LKR' : 'USD'} {totalExpenses.toFixed(2)}</p>
            {currency === 'USD' && <p className="converted">LKR {convertCurrency(totalExpenses).toFixed(2)}</p>}
          </div>
          <div className="budget-item">
            <h2>Remaining Budget</h2>
            <p className={remainingBudget < 0 ? 'negative' : 'positive'}>
              {currency === 'LKR' ? 'LKR' : 'USD'} {remainingBudget.toFixed(2)}
            </p>
            {currency === 'USD' && <p className="converted">LKR {convertCurrency(remainingBudget).toFixed(2)}</p>}
          </div>
        </div>
        <div className="budget-suggestion">
          <h2>Budget Suggestion</h2>
          <p>{getBudgetSuggestion()}</p>
          {!showSuggestionPlan && (
            <button onClick={handleGetSuggestionPlan} className="get-suggestion-btn">
              Get Suggestion Plan
            </button>
          )}
        </div>
        {showSuggestionPlan && renderSuggestionPlan()}
        <div className="add-expense">
          <h2>Add New Expense</h2>
          <form onSubmit={addExpense}>
            <input
              type="text"
              name="description"
              value={newExpense.description}
              onChange={handleExpenseChange}
              placeholder="Expense description"
              required
            />
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleExpenseChange}
              placeholder="Amount"
              required
            />
            <select
              name="category"
              value={newExpense.category}
              onChange={handleExpenseChange}
              required
            >
              <option value="">Select category</option>
              <option value="Food">Food</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Transportation">Transportation</option>
              <option value="Activities">Activities</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit">Add Expense</button>
          </form>
        </div>
        <div className="expense-list">
          <h2>Expense List</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className={`expense-item ${expense.category.toLowerCase()}`}>
                <span>{expense.description}</span>
                <span>{expense.category}</span>
                <span>{currency === 'LKR' ? 'LKR' : 'USD'} {expense.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Budget;