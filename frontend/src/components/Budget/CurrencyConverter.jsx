import { useState } from 'react'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('LKR')
  const [result, setResult] = useState(null)

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'LKR', name: 'Sri Lankan Rupee' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' }
  ]

  const handleConvert = () => {
    // Mock conversion rates (in a real app, you'd use an API)
    const rates = {
      USD: { LKR: 320.50, EUR: 0.93, GBP: 0.79 },
      LKR: { USD: 0.0031, EUR: 0.0029, GBP: 0.0025 },
      EUR: { USD: 1.08, LKR: 345.23, GBP: 0.85 },
      GBP: { USD: 1.27, LKR: 406.15, EUR: 1.17 }
    }

    if (amount && fromCurrency && toCurrency) {
      const convertedAmount = amount * rates[fromCurrency][toCurrency]
      setResult(convertedAmount.toFixed(2))
    }
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
      <div className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>
        <button
          onClick={handleConvert}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Convert
        </button>
        {result && (
          <div className="text-center p-4 bg-gray-50 rounded">
            <p className="font-semibold">
              {amount} {fromCurrency} = {result} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrencyConverter
