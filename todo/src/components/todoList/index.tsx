import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInterface from "../../interface/todos";
import { loadingTodo } from "../../store/reducers/todos";
import Add from "./add";
import EmptyList from "./emptyList";
import Item from "./item";
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

  
  return (
    <div className="content">      
      <div className="flex-todo">
        <div>
            {todoList.map((todo: TodoInterface) => (
                <Item key={todo.id} elem={todo} />          
            ))}
            {todoList.length === 0 && <EmptyList />}
        </div>
        <Add />
      </div>      
    </div>
  );
}

export default TodoList;
