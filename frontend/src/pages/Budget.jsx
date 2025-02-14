import BudgetTracker from '../components/Budget/BudgetTracker'
import CurrencyConverter from '../components/Budget/CurrencyConverter'

const Budget = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Travel Budget Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BudgetTracker />
        <CurrencyConverter />
      </div>
    </div>
  )
}

export default Budget
