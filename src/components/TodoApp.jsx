import {useEffect, useReducer} from 'react'
import {todoReducer} from './todoReducer.jsx'
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }
    const handleCheck = (todoId) => [
        dispatch({
            type: 'check',
            payload: todoId
        })
    ]
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>

        </div>
    )
}
