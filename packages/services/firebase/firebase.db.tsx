import { firestoreDb } from './firebase.utils';

export const shopQuery = async (
	category: string,
	filters: string[],
	lastItem?,
) => {
	let itemsRef = firestoreDb.collection(category).orderBy('name');
	filters.forEach(filter => {
		itemsRef = itemsRef.where(filter, '==', 'true');
	});
	if (lastItem) {
		itemsRef = itemsRef.startAfter(lastItem);
	}
	itemsRef = itemsRef.limit(40);

	const itemsSnapShot = await itemsRef.get();
	const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
	const items = [];
	itemsSnapShot.forEach(doc => {
		items.push({ ...doc.data(), id: doc.id });
	});
	return {
		items,
		lastItem: { ...newLastItem.data(), id: newLastItem.id },
	};
};
