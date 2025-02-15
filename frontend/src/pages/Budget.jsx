import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Budget = ({ toggleSidebar, isSidebarOpen }) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: 0 });

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense({ description: '', amount: 0 });
  };

  return (
    <div className={`budget ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main>
        <h1>Budget Tracker</h1>
        <form onSubmit={addExpense}>
          <input
            type="text"
            value={newExpense.description}
            onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
            placeholder="Expense description"
          />
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value)})}
            placeholder="Amount"
          />
          <button type="submit">Add Expense</button>
        </form>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.description}: ${expense.amount}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Budget;