import {useState} from "react";

export const TodoCheck = ({todo, index, handleCheck}) => {

    const [isChecked, setIsChecked] = useState(todo.done)

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
        handleCheck(todo.id)
    }

    return (
        <div>
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={todo.id}
                checked={isChecked}
                onChange={handleCheckBoxChange}
            />
            <label
                className={`${isChecked && 'complete'}`}
                htmlFor="check"
            >
                {index + 1}.{todo.desc}
            </label>
        </div>
    )
}