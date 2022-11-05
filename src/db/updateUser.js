import { doc, setDoc } from 'firebase/firestore';
import getDb from '../firebase/getDb';
import getUUID from '../utils/getUUID';

const db = getDb();

const updateUser = async (updateObject) => {
    const docRef = doc(db, 'users', getUUID())
    await setDoc(docRef, updateObject, {merge: true})
}

export default updateUser;