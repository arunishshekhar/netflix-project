import React from 'react'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import {useNavigate} from 'react-router-dom';


// const auth = getAuth();

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         // ...
//     } else {
//         // User is signed out
//         // ...
//     }
// });

function SignIn() {
    return (
        <div>
            <h1>SignIn</h1>
        </div>
    )
}

export default SignIn



