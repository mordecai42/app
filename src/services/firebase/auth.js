import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./"

const auth = getAuth(app);


function login(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then ((userCrential) =>{
        //signed in
        const user = userCrential.user;
        console.log(user)
        //...
    })
    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage)
    })
    }

function register(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
    });
}

export{ login, register }
