import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed} 
            id={"checkbox_id_" + props.item.id}
            onChange={() => props.changeItem(props.item.id)}
            />
            <label htmlFor={"checkbox_id_" + props.item.id} className={props.item.completed ? "done-item" : ""}>{props.item.text}</label>
            <span className = "deleteItem" onClick={() => props.deleteItem(props.item.id)}>X</span>
        </div>
    )
}

export default TodoItem