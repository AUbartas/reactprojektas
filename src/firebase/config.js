import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCFfqzpoj2zxEw32iAKU_0N8SPUoL2V4VU",
  authDomain: "aretainis-eshop.firebaseapp.com",
  projectId: "aretainis-eshop",
  storageBucket: "aretainis-eshop.appspot.com",
  messagingSenderId: "601609320900",
  appId: "1:601609320900:web:83bbb5cb91e9be39eccc91"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;