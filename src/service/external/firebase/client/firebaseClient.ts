import { DocumentData, collection, getDocs, query, doc, getDoc } from "firebase/firestore";
import database from "../config/firebase";

export class FirebaseClient {
    async getDocument<S>(doc: string): Promise<S> {
        const response: DocumentData[] = [];

        try {
            const docRef = query(collection(database, doc))
            const querySnapshot = await getDocs(docRef);

            querySnapshot.forEach((doc) => response.push(doc.data()))
        } catch(error) {
            if(error instanceof Error) {
                throw new Error(error.message);
            }
        }

        return response as S;
    }

    async getDocumentPerId<S>(docName: string, collectionName: string): Promise<S> {
        const docRef = doc(database, docName, collectionName);
        const docSnap = await getDoc(docRef);

        return docSnap.data() as S
    }
}