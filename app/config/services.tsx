import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addWallet = async (docid, data) => {
  const querydoc = doc(db, `walletconnect/${docid}`);
  await setDoc(querydoc, data, { merge: true });
};
