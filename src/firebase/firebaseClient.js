import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, addDoc } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByz5bZuIA904ByXEbkDzTIai5pSikWgXQ",
  authDomain: "digistore-c3111.firebaseapp.com",
  projectId: "digistore-c3111",
  storageBucket: "digistore-c3111.appspot.com",
  messagingSenderId: "404335352117",
  appId: "1:404335352117:web:62e458a9da350bd188d47c",
  measurementId: "G-3M43JCCYC7"
};

// init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

// get data
const getItemsById = async (id) => {
    const docRef = doc(collection(db, "items"), id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
}

// order
const addOrder = async (order) => {
    const docSnap = await addDoc(collection(db, "orders"), order)
    return docSnap.id
}

export {
    db,
    getItemsById,
    addOrder
}