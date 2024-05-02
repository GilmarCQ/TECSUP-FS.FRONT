import {useState} from "react";

const Form = ({ onSubmited }) => {
  const [input, setInput] = useState('hola')
  const handleChange = (event) => {
    const value = event.target.value
    setInput(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }
    //const updatedTodos = [...todos, newTodo]

    onSubmited(newTodo)
    setInput('')
  }

  return (
    <>
      <form
        className="flex items-center gap-2"
        onSubmit={handleSubmit}>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Que deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
        <input
          className="bg-blue-300 font-bold rounded px-2 py-2 cursor-pointer"
          type="submit"
          value="Añadir"/>
      </form>
    </>
  )
}
export default Form