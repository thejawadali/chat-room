import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const app = initializeApp( {
  apiKey: "AIzaSyBnslC8pmE0HIRgq0xl4EdHPkVyhU_fT-0",
  authDomain: "react-86446.firebaseapp.com",
  projectId: "react-86446",
  storageBucket: "react-86446.appspot.com",
  messagingSenderId: "546097945831",
  appId: "1:546097945831:web:8c85fc8fc4bbb2ea0ed642",
  measurementId: "G-R2N6DD277Q"
} )


export default getFirestore( app )