const initialState = {
  users: [],
  x: "",
  y: "",
};
const userReducer = (state = initialState, action) => {
  //aksiyonun type na göre gerekli güncellemeyi yap
  switch (action.type) {
    case "EKLE":
      return {};

    //eğer gelen aksiyon yukarıdakilerden biri değilse varsayılan state i koru
    default:
      return state;
  }
};
export default userReducer;
