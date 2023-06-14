import { DocumentData, collection, getDocs, query, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import database from "../config/firebase";

export class FirebaseClient {
    async getDocument<S>(doc: string): Promise<S> {
        const response: DocumentData[] = [];

        try {
            const docRef = query(collection(database, doc))
            const querySnapshot = await getDocs(docRef);

            querySnapshot.forEach((doc) => response.push(doc.data()))
        } catch (error) {
            if (error instanceof Error) {
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

    async setDocument(docName: string, data: any) {
        const docRef = await addDoc(collection(database, docName), {});
        const doc1 = doc(database, docName, docRef.id.toString())
        await updateDoc(doc1, {...data, id: docRef.id})
    }

    async putDocument(docName: string, collectionName: string, data: any) {
        const docRef = doc(database, docName, collectionName);
        await updateDoc(docRef, data)
    }

    async deleteDocument(docName: string, collectionName: string) {
        await deleteDoc(doc(database, docName, collectionName));    
    }
}