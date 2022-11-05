import { getDocs, collection, query, orderBy, limit, startAfter } from 'firebase/firestore';
import getDb from '../firebase/getDb';
import getUUID from '../utils/getUUID';

const db = getDb();

const getOrderedLogs = async (lim = 5, previousLogDoc) => {
    const logsRef = collection(db, 'users', getUUID(), 'logs');

    let queryRef;
    if (previousLogDoc) {
        queryRef = query(logsRef, orderBy('datetime'), startAfter(previousLogDoc), limit(lim));
    } else {
        queryRef = query(logsRef, orderBy('datetime'), limit(lim));
    }

    const returnedLogs = {};
    const querySnapshot = await getDocs(queryRef)
    querySnapshot.forEach(doc => {
        returnedLogs[doc.id] = doc.data();
    });
    return returnedLogs;
}

export default getOrderedLogs;