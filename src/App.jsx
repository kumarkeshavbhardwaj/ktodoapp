import React from 'react'

const App = () => {
  return (
   <>
   <div className=' mt-10 flex w-screen h-screen justify-center items-top'>
    <div className="col">
    <h1 className='text-center font-bold'>KTodo App</h1>
    <div className='mt-5'>
      <ul >
        <li className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>Do exercise</span>
          </h2></li>
          <li className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>Shower</span>
          </h2></li>
          <li className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>Get rickshaw</span>
          </h2></li>
          <li className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>Rech Metro</span>
          </h2></li>
          <li className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>Use biometric</span>
          </h2></li>
      </ul>
    </div>
    <div>
      <input className='border rounded-md mt-10 p-2' type="text" placeholder='Enter task' />
      <button className='ml-5 text-white p-2'>Add</button>
    </div>
    </div>
    </div>


   </>
  )
}

export default App