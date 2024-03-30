import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";
import api from "../utils/api";
import { toast } from "react-toastify";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  //silme aksiyonunu reducer a ilet
  const handleDelete = () => {
    const promise = api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: "Yeni todo yükleniyor",
      success: "Todo başarıyla silindi 👌",
      error: "Silinirken bir hata oluştu 🤯",
    });
  };

  //is_done değerini tersine çevirir
  const toggleIsDone = () => {
    //is_done değeri mevcut değerin tersi olan yeni nesne oluştur
    const updated = { ...todo, is_done: !todo.is_done };
    const promise = api
      .put(`/todos/${todo.id}`, updated)
      //store u güncelleneceğini reducer e haber ver
      .then(() => dispatch(updateTodo(updated)))
      .catch((err) => {
        throw new Error();
      });
    toast.promise(promise, {
      success: "Todo başarıyla güncellendi 👌",
      error: "Bir hata oluştu 🤯",
    });
  };

  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
