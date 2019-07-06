import React from "react"

function AddField(props) {
    return (
        <div className="add-item">
            <input
            name="addItem"
            type="text"
            value={props.inputValue}
            onChange={props.updateValue}
            />
            <button className = "add-item-button" onClick={props.addItem}>Add</button>
        </div>
    )
}

export default AddField