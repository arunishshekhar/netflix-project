import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from 'firebase/database';


// const firebaseConfig = {
//   apiKey: "AIzaSyAkUix4oJkjJ_5qT8bLaqrDMCxBuujN1-8",
//   authDomain: "netflix-app-c95ff.firebaseapp.com",
//   projectId: "netflix-app-c95ff",
//   storageBucket: "netflix-app-c95ff.appspot.com",
//   messagingSenderId: "1055017079388",
//   appId: "1:1055017079388:web:c7e41efdab0f9e88f84c99",
//   measurementId: "G-1111RVKTZ2"
// };


const firebaseConfig = {
  apiKey: "AIzaSyAkUix4oJkjJ_5qT8bLaqrDMCxBuujN1-8",
  authDomain: "netflix-app-c95ff.firebaseapp.com",
  databaseURL: "https://netflix-app-c95ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-app-c95ff",
  storageBucket: "netflix-app-c95ff.appspot.com",
  messagingSenderId: "1055017079388",
  appId: "1:1055017079388:web:c7e41efdab0f9e88f84c99",
  measurementId: "G-1111RVKTZ2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();

// //Write
// set(ref(db,'tarun'),{
//   name: 'kumar',
//   age: '200',
// })

// //Read
// const temp = ref(db,'tarun');
// onValue(temp, (snap) => {
//   console.log(snap.val());
// })


export const auth = getAuth(app);
export default app;

export const db = getDatabase();

