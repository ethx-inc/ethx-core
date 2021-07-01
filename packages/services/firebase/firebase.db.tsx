import {
	collection,
	CollectionReference,
	doc,
	DocumentData,
	endBefore,
	getDoc,
	getDocs,
	limit,
	Query,
	query,
	startAfter,
	where,
	getFirestore,
} from 'firebase/firestore';

export const db = getFirestore();

const pageLimit = 20;

const getEntriesByFilter = (
	entries: CollectionReference<DocumentData>,
	filters: string[],
	firstItem: unknown,
	lastItem: unknown,
): Query<DocumentData> => {
	let q: Query<DocumentData>;
	/*
	 * TODO: at first glance this seems to only use the last filter in the list because all filters before the last would get overwritten
	 * should double check this to make sure.
	 */
	filters.forEach(filter => {
		q = query(entries, where(filter, '==', true));
	});

	if (lastItem) {
		q = query(q, startAfter(lastItem), limit(40));
	} else if (firstItem) {
		q = query(q, endBefore(firstItem), limit(pageLimit));
	} else {
		q = query(q, limit(pageLimit));
	}

	return q;
};

// export const nextPageInQuery = async (
// 	category: string,
// 	filters: string[],
// 	firstItem?,
// 	lastItem?,
// ) => {
// 	let itemsRef = firestoreDb.collection(category).orderBy('name');
// 	filters.forEach(filter => {
// 		itemsRef = itemsRef.where(filter, '==', 'true');
// 	});
// 	if (lastItem) {
// 		itemsRef = itemsRef.startAfter(lastItem);
// 	}
// 	itemsRef = itemsRef.limit(pageLimit);
// 	const itemsSnapShot = await itemsRef.get();
// 	if (!itemsSnapShot.empty) {
// 		const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
// 		const newFirstItem = itemsSnapShot.docs[0];
// 		const items = [];
// 		itemsSnapShot.forEach(item => {
// 			items.push({ ...item.data(), id: item.id });
// 		});
// 		return {
// 			items,
// 			firstItem: newFirstItem,
// 			lastItem: newLastItem,
// 		};
// 	}
// 	return {
// 		items: [],
// 		firstItem,
// 		lastItem,
// 	};
// };

// export const prevPageInQuery = async (
// 	category: string,
// 	filters: string[],
// 	firstItem,
// 	lastItem,
// ) => {
// 	let itemsRef = firestoreDb.collection(category).orderBy('name');
// 	filters.forEach(filter => {
// 		itemsRef = itemsRef.where(filter, '==', 'true');
// 	});
// 	itemsRef = itemsRef.endBefore(firstItem);
// 	itemsRef = itemsRef.limitToLast(pageLimit);

// 	const itemsSnapShot = await itemsRef.get();
// 	if (!itemsSnapShot.empty) {
// 		const newFirstItem = itemsSnapShot.docs[0];
// 		const newLastItem = itemsSnapShot.docs[itemsSnapShot.docs.length - 1];
// 		const items = [];
// 		itemsSnapShot.forEach(doc => {
// 			items.push({ ...doc.data(), id: doc.id });
// 		});
// 		return {
// 			items,
// 			firstItem: newFirstItem,
// 			lastItem: newLastItem,
// 		};
// 	}
// 	return {
// 		items: [],
// 		firstItem,
// 		lastItem,
// 	};
// };

// export const getProduct = async (productId: string) => {
// 	const productRef = firestoreDb.collection('Products').doc(productId);
// 	try {
// 		const productSnapShot = await productRef.get();
// 		return { ...productSnapShot.data() };
// 	} catch (e) {
// 		console.log('error getting product', e.message);
// 		return null;
// 	}
// };

export const getBrand = async (brandId: string) => {
	const brandRef = doc(db, 'brands', 'brandId');
	const brandSnapShot = await getDoc(brandRef);

	return brandSnapShot.exists() ? brandSnapShot.data() : null;
};

export const getAllNewBrand = async () => {
	const brandRef = await getDocs(collection(db, 'Brands'));
	brandRef.forEach(brand => console.log(`${brand.id} => ${brand.data()}`));
};

export const shopQuery = async (
	category: string,
	filters: string[],
	firstItem?,
	lastItem?,
): Promise<Query<DocumentData>> => {
	// const itemsDoc = doc(db, 'category', 'name');
	const itemsCollection = collection(db, category, 'name');

	const itemsQuery = getEntriesByFilter(
		itemsCollection,
		filters,
		firstItem,
		lastItem,
	);

	return itemsQuery;
};

export const getUser = async (): Promise<void> => {
	// TODO: move get user from utils to here
};
