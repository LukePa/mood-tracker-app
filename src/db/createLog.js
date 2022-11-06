import { collection, addDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import getDb from '../firebase/getDb';
import getUUID from '../utils/getUUID';

const db = getDb();

const createLog = async (briefDescription, overallMood, metrics, longDescription) => {
    const logsCollectionRef = collection(db, 'users', getUUID(), 'logs');
    await addDoc(logsCollectionRef, {
        briefDescription,
        overallMood,
        metrics,
        longDescription
    })
}

export default createLog;