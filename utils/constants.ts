const pluck = <T, K extends keyof T>(items: T[], key: K): T[K][] =>
	items.map(item => item[key]);

export interface DBObject {
	name: string;
	dbRef: string;
}

export const categoriesMap: DBObject[] = [
	{ name: 'Makeup', dbRef: 'makeup' },
	{ name: 'Hair Care', dbRef: 'hair care' },
	{ name: 'Skin Care', dbRef: 'skin care' },
	{ name: 'Sun Care', dbRef: 'sun care' },
	{ name: 'Personal Care', dbRef: 'personal care' },
	{ name: 'Bath', dbRef: 'bath' },
	{ name: 'Fragrance', dbRef: 'fragrance' },
];
export const filtersMap: DBObject[] = [
	{ name: 'Asian Owned', dbRef: 'asian-owned' },
	{ name: 'Black Owned', dbRef: 'black-owned' },
	{ name: 'Mom Owned', dbRef: 'mom-owned' },
	{ name: 'Sustainable Packaging', dbRef: 'sustainable-packaging' },
	{ name: 'Vegan', dbRef: 'vegan' },
	{ name: 'Veteran Owned', dbRef: 'veteran-owned' },
];

console.log(pluck(categoriesMap, 'name'));
