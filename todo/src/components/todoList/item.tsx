import React from "react";
import { useDispatch } from "react-redux";
import TodoInterface from "../../interface/todos";
import { deleteTodo, updateTodo } from "../../store/reducers/todos";

const Item = (props: { elem: TodoInterface }) => {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #FFF",
                margin: "20px 0"
            }}
        >
            <input
                className="task-status"
                type="checkbox"
                onChange={() => {
                    dispatch(updateTodo({
                        ...props.elem,
                        isCompleted: !props.elem.isCompleted,
                    }))
                    dispatch({ type: "COMPLETE_TODO", id: props.elem.id });
                }}
                checked={props.elem.isCompleted}
            ></input>
            <label className={"task-name" + (props.elem.isCompleted ? " complete" : "")}>
                {props.elem.title}
            </label>
            <button
                aria-label="task delete"
                className="task-delete"
                onClick={() => {
                    dispatch(deleteTodo(props.elem.id));                    
                }}
            ></button>
        </div>
    );
};

export default Item;