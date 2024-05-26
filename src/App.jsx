import { useState } from 'react'
import './App.css'

function App() {

  const[total , setTotal] = useState(0)
  let[newTotal , setNewTotal] = useState(0)
  

  const calculateExpense = () => {
    newTotal = Number(newTotal) + Number(total)
    setNewTotal(newTotal)
    console.log(newTotal)
  }

  return (
    <>
      <div className='h-96 w-full bg-red-500 rounded-md'>
        <h1 className='font-semibold text-2xl p-4'>My Expense Tracker</h1>
        <label>Item name : </label>
         <input type='text' placeholder='enter the item name' 
         className='p-3 mt-4 rounded-lg bg-slate-200'
         />
         <br />
         <label>Item price : </label>
         <input type='number' placeholder='enter the item price' 
         className='p-3 mt-6 rounded-lg bg-slate-200' id='price'
         value={total}
         onChange={e => setTotal(e.target.value)}
         />
         <br />
         <button className='m-7 bg-green-500 py-4 px-6 rounded-lg font-semibold
         hover:bg-green-700 hover:text-white
         '
         onClick={calculateExpense}
         >Add</button>
         <br />
         <h1 className=''>My Total Expense</h1>
         <p>{newTotal}</p>
      </div>
    </>
  )
}

export default App
