import {TodoListItem} from "./TodoListItem.jsx"

export const TodoList = ({todos, handleDelete, handleCheck}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}