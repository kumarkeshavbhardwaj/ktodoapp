import React, { useState } from 'react'





const App = () => {


  const colors = ['bg-amber-400', 'bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-400', 'bg-pink-400', 'bg-purple-400', 'bg-indigo-400', 'bg-gray-400', 'bg-teal-400']
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  return (
    <>
    <div className={`flex w-screen h-screen justify-center items-center ${colors[index]}`}>
      <div className="flex flex-col items-center">
      <h1 className='font-bold text-black'>Count: {count}</h1>
      <button className='mt-5' onClick={()=> {
          
          if(count < 10){
            setCount(count + 1)
            setIndex(count+1)
          } else {
            setCount(0)
            setIndex(0)
          }


      } 
      }>Tap here</button>
      </div>
    </div>
    </>
  )
}

export default App