import { getAuth } from "firebase/auth";
import getFirebase from "./getFirebase";

let auth;

const getFirebaseAuth = () => {
    if (!auth) {
        const app = getFirebase();
        auth = getAuth(app);
    }
    return auth;
}

export default getFirebaseAuth;