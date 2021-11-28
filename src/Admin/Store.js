import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const pushDataTODb = async (values) => {
  //posting it to firebase
  const docRef = await addDoc(collection(db, "expense-details"), values);
  //console.log("Document written with ID: ", docRef.id);

  return docRef;
};
