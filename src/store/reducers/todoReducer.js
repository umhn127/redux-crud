import ActionTypes from "../actionTypes";

/*
 ! reducer
 * state'in nasıl değişceğine karar verir.
 * reducer normal bir fonksiyondur.
 * ve bu fonksiyon iki parametre alır
 * > state: reducer'da tutulan verilerin son durumu
 * > action: verilerin nasıl dğeişiceğini ifade eden nesne
 
 * useReducer'dan farklı olarak initialStat'i state parametresine varsayılan değer olarak veririz
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};
const todoReducer = (state = initialState, action) => {
  //aksiyonun type na göre gerekli güncellemeyi yap
  switch (action.type) {
    //eğer ADD aksiyonu çalışırsa
    case ActionTypes.ADD:
      return { ...state, todos: state.todos.concat(action.payload) };

    //eğer DELETE aksiyonu çalışırsa
    case ActionTypes.DELETE:
      //diziden silinecek elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      //reducer da tutula todos değerini güncelle
      return { ...state, todos: filtred };

    //eğer UPDATE çalışırsa
    case ActionTypes.UPDATE:
      //dizideki eski elemanın yerine action payload ile gelen elemanı koy
      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      // reducer da tutulan todos u güncele
      return { ...state, todos: updatedArr };

    //eğer SET aksiyonu çalışırsa:
    case ActionTypes.SET:
      return { ...state, todos: action.payload };
    //eğer gelen aksiyon yukarıdakilerden biri değilse varsayılan state i koru
    default:
      return state;
  }
};
export default todoReducer;
