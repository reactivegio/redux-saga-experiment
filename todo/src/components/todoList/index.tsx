import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingTodo } from "../../store/reducers/todos";
import Add from "./add";
import "./style.scss";

const TodoList:React.FC = ()  => {
  const dispatch = useDispatch();
  const { todoList, status } = useSelector(
    (state: any) => state.todos
  );

  const loadTodos = useCallback(() => {
    dispatch(loadingTodo());
  }, [dispatch]);

  useEffect(() => {
    loadTodos();
  }, [dispatch, loadTodos]);

  debugger;
  return (
    <div className="content">      
      <div className="flex-todo">
        
        {todoList.map((todo: any) => (
          <div
            key={todo.id}           
          >
            <div>{todo.title}</div>
            <div>{todo.isComplete}</div>
          </div>
        ))}
        <Add />
      </div>      
    </div>
  );
}

export default TodoList;
