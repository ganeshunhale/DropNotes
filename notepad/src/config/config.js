import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// export const DB_CONFIG = {

//     apiKey: "AIzaSyBleteg70UvvXLRaWneecWgmqBSlZCY4gQ",
//     authDomain: "notes-26902.firebaseapp.com",
//     projectId: "notes-26902",
//     storageBucket: "notes-26902.appspot.com",
//     messagingSenderId: "242015768874",
//     appId: "1:242015768874:web:469cc68ca55f24e18e0e53",
//     measurementId: "G-0J1ZT58QWR"

// }
export const DB_CONFIG = {

    apiKey: "AIzaSyBleteg70UvvXLRaWneecWgmqBSlZCY4gQ",
    authDomain: "notes-26902.firebaseapp.com",
    projectId: "notes-26902",
    storageBucket: "notes-26902.appspot.com",
    messagingSenderId: "242015768874",
    appId: "1:242015768874:web:07acbeb93614366f8e0e53",
    measurementId: "G-CVC1LX7VW0"

}
const app = initializeApp(DB_CONFIG)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
