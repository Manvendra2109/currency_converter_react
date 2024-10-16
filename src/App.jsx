import { useState } from 'react'
import { InputBox } from './components'
import usecurrency from './hooks/usecurrency'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

 // Now we will see how to use hooks that we made
 const currency = usecurrency(from) // this will tell from which currency the conversion is required
  const options = currency ? Object.keys(currency) : []

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConverted(amount)
    setAmount(converted)
  }

  const convert = () => {
    setConverted(amount * (currency[to] || 1))
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-fixed" 
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/14907378/pexels-photo-14907378.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto border border-gray-300 shadow-lg rounded-lg backdrop-blur-sm bg-gradient-to-b from-white/40 to-white/10 p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Currency Converter</h1>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          className="space-y-6"
        >
          <div>
            <InputBox
              label="From"
              amount={amount}
              currencyoptions={options}
              oncurrencychange={(currency) => setFrom(currency)}
              selectcurrency={from}
              onamountchange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full flex justify-center mb-2">
            <button
              type="button"
              className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              onClick={swap}
            >
              <span className="mr-2">Swap</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div>
            <InputBox
              label="To"
              amount={converted}
              currencyoptions={options}
              oncurrencychange={(currency) => setTo(currency)}
              selectcurrency={to}
              amountdisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <p className="font-semibold text-xl">
            {amount} {from.toUpperCase()} = {converted} {to.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App


// i want to add the inr to dollar excahnge also in the the above currency changer