export const formatCurrency = (amount, currency = 'LKR') => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency
    }).format(amount)
  }
  
  export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-LK')
  }
  