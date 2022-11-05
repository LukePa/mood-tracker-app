import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import getDb from '../firebase/getDb';

const db = getDb();

const testing = async () => {
    // = doc(db, 'users', 'ASbFpLS6O2Qaps3ysx5fUijeX3o1', 'trickyone', 'testdocid');
    const docRef = doc(db, 'users', 'ASbFpLS6O2Qaps3ysx5fUijeX3o1');
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());

    const collectionRef = collection(db, docRef, 'trickyone')
    const docsrefs = getDocs(collectionRef)
}

export default testing