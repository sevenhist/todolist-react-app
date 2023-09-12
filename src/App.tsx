import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active'

export function Counter() {
  let array = useState(5)
  let data = array[0] // читаем 5 из масива тоесть перввий елемент 
  let setData = array[1]
  return <div onClick={() => setData(data+1)}>{data}</div>
}
function App() {
  let array = useState() // достает из useState масив в котором 
  let tasks2 = array[0] // осталось 4 таски, потому что беру первый елемент 0
  let setTasks2 = array[1] // меняет state которий вишел из useState

  const [tasks, setTasks] = useState<Array<TaskType>>([ // масив  Array, который делает указание что тип данных должен быть
    {id: 1, title: 'CSS&HTML', isDone: true }, // написан точь в точь как в указано в типе масиве: title: string - only string
    {id: 2, title: 'Js', isDone: true },
    {id: 3, title: 'React', isDone: false },
    {id: 4, title: 'Redux', isDone: true },
    {id: 5, title: 'Hooks', isDone: true },
    {id: 6, title: 'Lalala', isDone: false }
])
  let [filter, setFilter] = useState<FilterValuesType>('all')
  let TaskForToDoList = tasks
  if(filter === 'all') {
    TaskForToDoList = tasks
  }
  if (filter === 'completed') {
    TaskForToDoList = tasks.filter(t => t.isDone === true)
  }
  if (filter === 'active') {
    TaskForToDoList = tasks.filter(t => t.isDone === false)
  }
  function removeTask(id: number) {
    let filteredTasks = tasks.filter( task => task.id !== id)
    setTasks(filteredTasks)
  }
  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }
  return (
    <div className="App">
      <Todolist title='What to learn' 
      tasks={TaskForToDoList}
      removeTask={removeTask}
      changeFilter={changeFilter}
      />
    </div>
  );
}


export default App;
