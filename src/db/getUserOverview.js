import { getDoc, doc } from 'firebase/firestore';
import getDb from '../firebase/getDb';
import getUUID from '../utils/getUUID'

const db = getDb();

const getUserOverview = async () => {
    const docRef = doc(db, 'users', getUUID());
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export default getUserOverview;