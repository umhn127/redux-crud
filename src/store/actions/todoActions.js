//!Aksiyon nesnesi oluşturan fonksiyon
//payload değeri dinamik olacağı için fpnksiyonları tercih ettik
//payload değerini parametre olarak aldık
//bu fonksiyonlar çağrıldığında bir aksiyon nesnesi döndürüyor
//bileşen içerisindeki dispatch alanlarındaki kodları kısaltıp daha okunabilir yapıyoruz

import ActionTypes from "../actionTypes";

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});
export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
