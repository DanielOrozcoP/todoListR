import {TodoCheck} from "./TodoCheck.jsx";

export const TodoListItem = ({todo, index, handleDelete, handleCheck}) => {


    return (
        <li key={todo.id}
            className='list-group-item form-check'
        >
            <TodoCheck
                todo={todo}
                handleCheck={handleCheck}
                index={index}
            />
            <button className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}