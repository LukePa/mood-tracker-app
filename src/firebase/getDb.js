import { getFirestore } from "firebase/firestore"
import getFirebase from "./getFirebase";

let db;

const getDb = () => {
    if (!db) {
        const app = getFirebase()
        db = getFirestore(app)
    }
    return db;
}

export default getDb