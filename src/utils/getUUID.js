import getFirebaseAuth from "../firebase/getFirebaseAuth";


const getUUID = () => {
    const auth = getFirebaseAuth();
    if (auth.currentUser) {
        return auth.currentUser.uid;
    } else {
        return null;
    }
}

export default getUUID