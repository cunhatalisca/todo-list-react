import { useState } from "react";

function TodoForm({ addTodo }) {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if(!value || !category) return;
    addTodo(value, category)
    setValue("")
    setCategory("")
    console.log(value, category)
  }

  return (
    <div>
        <h2>Adicionar tarefa:</h2>
        <form onSubmit={handleSubmit} className="form-row">
            <input 
                type="text" 
                placeholder='Digite o título' 
                value={value}
                onChange={(e) =>setValue(e.target.value)} 
                />
            <select 
            onChange={(e) => setCategory(e.target.value)} 
            value={category}>
                <option value="">Selecione uma categoria</option>
                <option value="Treino">Treino</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Faculdade">Faculdade</option>
            </select>
            <button type="submit" className='btn'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm;