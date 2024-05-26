import { useState } from 'react'
import './App.css'

function App() {

  const[total , setTotal] = useState(0)
  const[item , setItem] = useState("")
  const[list , setList] = useState([])
  let[newTotal , setNewTotal] = useState(0)
  
  let nextId = 0

  const calculateExpense = () => {
    newTotal = Number(newTotal) + Number(total)
    setNewTotal(newTotal)
    setItem(item)
    list.push(item)
    setList([...list , {id: nextId++ , name: item}])
    console.log(list)
  }

  return (
    <>
      <div className='h-96 w-full bg-red-500 rounded-md'>
        <h1 className='font-semibold text-4xl p-4'>My Expense Tracker</h1>
        <label>Item name : </label>
         <input type='text' placeholder='enter the item name' 
         className='p-3 mt-4 rounded-lg bg-slate-200'
         value={item}
         onChange={e => setItem(e.target.value)}
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
         <h1 className=''>Money Spent</h1>
         <p>Rs.{newTotal}</p>
      </div>
      <div className='w-full h-auto bg-slate-300 mt-2'>
          <ul className='mt-4 pb-4'>
            {list.map(items => (
              <li key={items.id}>
                <div>
                  <p>{items.name}</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default App
