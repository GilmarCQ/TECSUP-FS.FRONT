const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  return (
    <>
      <li className="flex">
        <input
          className="mr-2"
          type="checkbox"
          data-id={todo.id}
          onChange={onCompleted}
          checked={todo.completed}
        />
        <div className="w-full flex justify-between items-center">
                                    <span className={todo.completed ? 'line-through' : ''}>
                                        {todo.title}
                                    </span>
          <button
            className="bg-red-300 rounded-lg px-2 py-2"
            data-id={todo.id}
            onClick={onRemoveTodo}
          >X
          </button>
        </div>
      </li>
    </>
  )
}
export default TodoItem