import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';

const auth = getAuth(app);

const useFireBase = () => {
    const googleProvider = new GoogleAuthProvider();

    const [user, serUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user;
            serUser(user);
            console.log(user);
        })
        .catch(err=>{
            console.error(err)
        })
        console.log("sign in")
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log("sign Out")
        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            serUser(user);
        })
    },[])

    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}

export default useFireBase;



