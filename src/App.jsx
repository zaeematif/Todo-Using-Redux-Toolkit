import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'


function App() {
  return (
    <div className='w-3/4 mx-auto'>
      <AddTodo/>
      <Todo/>
    </div>
  )
}

export default App
