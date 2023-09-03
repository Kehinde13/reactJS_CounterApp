import { useState } from 'react'
import {
  ChevronDown,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
  Hash,
  RotateCcw
} from 'react-feather'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(current => current += 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(current => current -= 1)
    }
  }

  const reset = () => {
    setCount(current => current = 0)
  }

  const randomCount = () => {
    setCount(current =>
      current = Math.floor(Math.random() * 100)
    )
  }

  const decrementCountBy10 = () => {
    if (count > 0) {
     setCount(current => current -= 10)
    }
  }

  const incrementCountBy10 = () => {
    setCount(current => current += 10)
  }

  return (
    <div className='counter'>
       <h3>Current value</h3>
       <h1>{count}</h1>
       <div className='buttons'>
         <button onClick={incrementCount}>
           <ChevronUp />
         </button>
         <button>
           <ChevronsUp onClick={incrementCountBy10}/>
         </button>
         <button>
           <RotateCcw onClick={reset}/>
         </button>
         <button>
           <Hash onClick={randomCount}/>
         </button>
         <button>
           <ChevronDown onClick={decrementCount}/>
         </button>
         <button>
           <ChevronsDown onClick={decrementCountBy10}/>
         </button>
       </div>
    </div>
  )
}

export default App
