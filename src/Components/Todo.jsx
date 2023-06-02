import React from 'react'

function Todo({ todo, removeTodo, }) {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">
            ({todo.category})
            </p>
        </div>
        <button 
          className='btn btn-danger' 
          onClick={() => removeTodo(todo.id)}
          >Delete
        </button>
    </div>
  )
}

export default Todo