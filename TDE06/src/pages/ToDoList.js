import { useState } from "react";
import "./ToDoList.css";

const ListItem = ({ toDoItem }) => {
    return (
        <div className="listItem" style={toDoItem.done ? { backgroundColor: "#238636" } : null}
        >
            {toDoItem.name}
        </div>
    )
}

const ToDoList = ({ pageTitle }) => {
    const [ToDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onClickTask = () => {
        if (!inputValue) return;
        setToDoList([...ToDoList, { name: inputValue, done: false }]);
        setInputValue("");
    };

    const deleteClickTask = () => {
        if (!inputValue) return;

    }


    return (
        <div>
            <div className="header">
                <h1>{pageTitle}</h1>
            </div>

            <div className="inputContainer">
                <label for="taskText" className="inputLabel" >Digite sua tarefa
                </label>
                <input id="taskText"
                    name="taskText"
                    className="input"
                    value={inputValue}
                    onChange={onInputChange} />
                <button
                    className="addButton"
                    onClick={onClickTask}
                >+</button>
                <button
                    className="deleteButton"
                    onClick={deleteClickTask}
                >-</button>
            </div>
            <div className="list">
                {ToDoList.map(toDoItem => (<ListItem toDoItem={toDoItem} />))}
            </div>

        </div>
    );
}

export default ToDoList;