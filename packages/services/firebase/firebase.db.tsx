import { firestoreDb } from './firebase.utils';
import { CartItem } from '../context/cart-context';

const pageLimit = 20;

export const nextPageInQuery = async (
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
	}
	itemsRef = itemsRef.limit(pageLimit);
	const itemsSnapShot = await itemsRef.get();
	if (!itemsSnapShot.empty) {
		const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
		const newFirstItem = itemsSnapShot.docs[0];
		const items = [];
		itemsSnapShot.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id });
		});
		return {
			items,
			firstItem: newFirstItem,
			lastItem: newLastItem,
		};
	}
	return {
		items: [],
		firstItem,
		lastItem,
	};
};

export const prevPageInQuery = async (
	category: string,
	filters: string[],
	firstItem,
	lastItem,
) => {
	let itemsRef = firestoreDb.collection(category).orderBy('name');
	filters.forEach(filter => {
		itemsRef = itemsRef.where(filter, '==', 'true');
	});
	itemsRef = itemsRef.endBefore(firstItem);
	itemsRef = itemsRef.limitToLast(pageLimit);

	const itemsSnapShot = await itemsRef.get();
	if (!itemsSnapShot.empty) {
		const newFirstItem = itemsSnapShot.docs[0];
		const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
		const items = [];
		itemsSnapShot.forEach(doc => {
			items.push({ ...doc.data(), id: doc.id });
		});
		return {
			items,
			firstItem: newFirstItem,
			lastItem: newLastItem,
		};
	}
	return {
		items: [],
		firstItem,
		lastItem,
	};
};

export const getProduct = async (productId: string) => {
	const productRef = firestoreDb.collection('products').doc(productId);
	try {
		const productSnapShot = await productRef.get();
		return { ...productSnapShot.data() };
	} catch (e) {
		console.log('error getting product', e.message);
		return null;
	}
};

export const getBrand = async (brandId: string) => {
	const brandRef = firestoreDb.collection('brands').doc(brandId);
	try {
		const brandSnapShot = await brandRef.get();
		return { ...brandSnapShot.data() };
	} catch (e) {
		console.log('error getting product', e.message);
		return null;
	}
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
		itemsRef = itemsRef.limitToLast(pageLimit);
	} else {
		itemsRef = itemsRef.limit(pageLimit);
	}
	return itemsRef;
};
