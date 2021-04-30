import { firestoreDb } from './firebase.utils';

export const shopQuery = (category: string, filters: string[], lastItem?) => {
	let itemsRef = firestoreDb.collection(category).orderBy('name'); // .limit(40);
	filters.forEach(filter => {
		itemsRef = itemsRef.where(filter, '==', 'true');
	});
	itemsRef = itemsRef.limit(40);
	// itemsRef.get()
};
