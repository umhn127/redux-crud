//projede kullanılan aksiyon tipleri string şeklinde tanımlandığundan dikkat dağınıklığı sonucu oluşabilecek ve tespit etmesi zaman alan hataların önüne geçmesi için tipleri bir nesne içericinde tanımlayacağız.

//nesne şeklinde tanımladığımız için artık oto tamamlama özelliği sayesinde harf yazım hatalarından büyük oranda kurtuluyoruz.

//1.yöntem
const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

export default ActionTypes;

//2.yöntem
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
