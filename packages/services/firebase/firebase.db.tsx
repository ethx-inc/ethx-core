import { firestoreDb } from './firebase.utils';

export const nextPageInQuery = async query => {
	const itemsSnapShot = await query.get();
	if (itemsSnapShot.exists) {
		const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
		const firstItem = itemsSnapShot.docs[0];
		const items = [];
		itemsSnapShot.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id });
		});
		return {
			items,
			firstItem,
			lastItem: newLastItem,
		};
	}
	return {
		items: [],
		firstItem: null,
		lastItem: null,
	};
};

export const prevPageInQuery = async query => {
	const itemsSnapShot = await query.get();
	if (itemsSnapShot.exists) {
		const newFirstItem = itemsSnapShot.docs[0];
		const lastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
		const items = [];
		itemsSnapShot.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id });
		});
		return {
			items,
			firstItem: newFirstItem,
			lastItem,
		};
	}
	return {
		items: [],
		firstItem: null,
		lastItem: null,
	};
};

export const shopQuery = (
	category: string,
	filters: string[],
	firstItem?,
	lastItem?,
) => {
	let itemsRef = firestoreDb.collection(category).orderBy('name');
	filters.forEach(filter => {
		itemsRef = itemsRef.where(filter, '==', 'true');
	});
	if (lastItem) {
		itemsRef = itemsRef.startAfter(lastItem);
		itemsRef = itemsRef.limit(40);
	} else if (firstItem) {
		itemsRef = itemsRef.endBefore(firstItem);
		itemsRef = itemsRef.limitToLast(40);
	} else {
		itemsRef = itemsRef.limit(40);
	}
	return itemsRef;
};
