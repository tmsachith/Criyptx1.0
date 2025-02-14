import { useState } from 'react'
import CurrencyConverter from './CurrencyConverter'
import '../../styles/Budget.css';


const BudgetTracker = () => {
  const [expenses, setExpenses] = useState([])
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const handleAddExpense = () => {
    if (amount && category) {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          amount: parseFloat(amount),
          category,
          date: new Date()
        }
      ])
      setAmount('')
      setCategory('')
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Budget Tracker</h2>
      <CurrencyConverter />
      {/* Add expense form and list */}
    </div>
  )
}

export default BudgetTracker
