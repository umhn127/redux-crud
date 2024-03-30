import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  //store daki verilere abone olma
  //direkt store u return edersek uyarı verir
  //genelde sadece ihtiyacımız olan reducer a abone oluruz(store.---Reducer)
  const storeState = useSelector((store) => store.todoReducer);

  console.log(storeState);
  return (
    <div>
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
