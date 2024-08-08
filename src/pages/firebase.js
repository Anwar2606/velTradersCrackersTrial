import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  //main
  apiKey: "AIzaSyDbd69k9UMNrtyTlTApmVQhFL-ZcRpdsEQ",
  authDomain: "trailbilling1.firebaseapp.com",
  projectId: "trailbilling1",
  storageBucket: "trailbilling1.appspot.com",
  messagingSenderId: "975007204440",
  appId: "1:975007204440:web:686a3998f4a1a48a36f62d"
  
  //testing
  // apiKey: "AIzaSyCTmFMUSQL_lvxZSGzihrx5G7AypB4Uk5Q",
  // authDomain: "testing-855ce.firebaseapp.com",
  // projectId: "testing-855ce",
  // storageBucket: "testing-855ce.appspot.com",
  // messagingSenderId: "1086229411180",
  // appId: "1:1086229411180:web:4a835dadcfb73b08a42f49"      


};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const storage = getStorage(app); 
const auth = getAuth(app); 

export { db, storage, auth }; 
