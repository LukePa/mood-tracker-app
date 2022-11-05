import { doc, setDoc } from 'firebase/firestore';
import getDb from '../firebase/getDb';
import getUUID from '../utils/getUUID';

const db = getDb();

const setInitialUser = async (nickname, initialMetrics) => {
    const docRef = doc(db, 'users', getUUID())
    await setDoc(docRef, {
        nickname,
        trackedMetrics: initialMetrics
    })
}

export default setInitialUser;