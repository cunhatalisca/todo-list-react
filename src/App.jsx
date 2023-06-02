import { useState } from 'react'
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

function App () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Ir à academia",
      category: "Treino",
      isCompleted: false
    },
    {
      id: 2,
      text: "Estudar a apostila",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 3,
      text: "Criar nova funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false
    }

  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }]

    setTodos(newTodos)
  }
  
  const removeTodo = (id) => {
    const newTodos = [...todos]
    console.log(newTodos)
    const filteredTodos = newTodos.filter((todo) => {
      return todo.id !== id;
    })

    setTodos(filteredTodos);
  }

  return (
    <div className='new-item-form'>
      <h1>Lista de Tarefas</h1>
      <div className="form-row">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
    )
}

export default App;