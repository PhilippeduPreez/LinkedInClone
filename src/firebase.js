import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8FyR20thEcOiR632kPe-iihN48Zm88uM",
  authDomain: "linkedin-clone-73953.firebaseapp.com",
  projectId: "linkedin-clone-73953",
  storageBucket: "linkedin-clone-73953.appspot.com",
  messagingSenderId: "774396052915",
  appId: "1:774396052915:web:b2609cc8c35141ae6db7c6",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
