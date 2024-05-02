import {useState} from "react";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import Form from "./components/Form.jsx";
import Stats from "./components/Stats.jsx";

const App = () => {

    const INITIAL_TODOS = [
        {
            id: 1,
            title: 'Aprender JS',
            completed: false
        },
        {
            id: 2,
            title: 'Aprender CSS',
            completed: true
        },
        {
            id: 3,
            title: 'Aprender React.js',
            completed: false
        }
    ]

    const [todos, setTodos] = useState(INITIAL_TODOS)

    const handleSubmit = (newTodo) => {
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)
    }
    const handleRemove = (event) => {
        const {id} = event.target.dataset
        const newTodos = todos.filter(todo => todo.id != id)
        setTodos(newTodos)
    }
    const handleCompleted = (event) => {
        const isChecked = event.target.checked
        const {id} = event.target.dataset
        // const index = todos.findIndex(todo => todo.id == id)
        // const newTodos = [...todos]
        // newTodos[index].completed = isChecked

        const newTodos = todos.map(todo => {
            if ( todo.id == id ) {
                return {...todo, completed: isChecked}
                // si hubo algun cambio se modifica el item-objeto
            }
            // si no se encontrara el id no se cambia nada
            return todo
        })
        setTodos(newTodos)
    }
    const handleCleanCompleted = (event) => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }

    return (
        <main className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4">
            <Header />
            <Form
                onSubmited={handleSubmit}
            />

            {todos.length > 0 && (
            <Stats
                todos={todos}
                onCleanCompleted={handleCleanCompleted}
            />
            )}

            <section className="mt-8">
                <TodoList
                  todos={todos}
                  onCompleted={handleCompleted}
                  onRemoveTodo={handleRemove}
                />
            </section>

            <pre>{JSON.stringify(todos)}</pre>

        </main>
    )
}

export default App;
