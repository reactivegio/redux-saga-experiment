import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducers/todos";
import { v4 as uuidv4 } from "uuid";

const Add:React.FC = () => {

    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="add-section">
            <input value={newTodo} onChange={(event) => { setNewTodo(event.currentTarget.value) }} className="input-add" placeholder="Add a new todo" />
            <button className="green-btn" onClick={() => { 
                const _id = uuidv4();
                dispatch(addTodo({
                    id: _id,
                    title: newTodo,
                    isCompleted: false
                }));
                 setNewTodo(""); 
                }
                 }>ADD</button>
        </div>
    );
};

export default Add;