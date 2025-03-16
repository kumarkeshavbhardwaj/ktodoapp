import React, {useState} from 'react'



const App = () => {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  const handleAddTask = () => {
    if(task){
      setTasks([...tasks, task])
      setTask('')
      localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    }
  }





  return (
   <>
   <div className=' mt-10 flex w-screen h-screen justify-center items-top'>
    <div className="col">
    <h1 className='text-center font-bold'>KTodo App</h1>
    <div className='mt-5'>
      <ul className='max-h-80
      f overflow-y-auto'>
        {tasks.map((task, index) => (
          <li key={index} className='m-2'>
          <h2>
          <input className='form-checkbox h-4 w-4 text-blue-600' type="checkbox" />
          <span className='ml-5 text-xl font-semibold'>{task}</span>
          </h2></li>
        ))} 

      </ul>
    </div>
    <div>
      <input className='border rounded-md mt-10 p-2' type="text" value={task} placeholder='Enter task' onChange={(e)=>{
        setTask(e.target.value)
      }} />
      <button className='ml-5 text-white p-2' onClick={(e)=>{
       handleAddTask()
      }}>Add</button>
    </div>
    </div>
    </div>


   </>
  )
}

export default App