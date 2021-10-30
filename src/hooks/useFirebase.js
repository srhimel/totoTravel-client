import FirebaseInit from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInit();

const useFirebase = () => {
    const auth = getAuth();
    const gooleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, gooleProvider)
            .then(result => {
                setUser(result.user)
                setIsLoading(false)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => setUser({})).catch(error => setError(error.message));
    }


    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
                else {
                    setUser({});
                }
                setIsLoading(false);
            })
        }
        return unsubscribe();
    }, [auth]);


    return {
        googleSignIn,
        user,
        error,
        isLoading,
        logOut
    }
}

export default useFirebase;