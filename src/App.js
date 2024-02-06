import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [Item, setNewItem] = useState(" ");
  const [todo, setTodo] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodo(currentTodo => { return [...currentTodo, { id: crypto.randomUUID(), title: Item, completed: false },] })

    {/* clears out the previous input */ }
    setNewItem(" ")
  }

  function toggleTodo(id, completed) {
    setTodo(currentTodo => {
      return (currentTodo.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      }))
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id != id)
    })
  }

  return (
    <div> {/* components in react can only return 1 element */}
      <h1> Todo List </h1>
      <form onSubmit={(handleSubmit)}> {/* form is used to create HTML for user input. onSubmit is used when the user users 'enter' */}
        <div>
          <label>Enter a task.</label>
          <input value={Item} onChange={e => setNewItem(e.target.value)} type="text" /> {/* input from user is set as Item. onChange updates the Item when a change is made. setNewItem takes new value of input and sets it as Item and reruns  */}
        </div>
        <button> Add </button>
      </form>
      <ul> {/* creates a list of items with no order */}
        {todo.map(todo => {
          return (
            <li key={todo.id}> {/* defines each item within the list  */}
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.check)} />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}> Delete </button>
            </li>
          )
        })}
      </ul>
    </div>

  );
}



