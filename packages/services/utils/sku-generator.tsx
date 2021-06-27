export type PrimaryAttribute = {
	color?: string;
	scent?: string;
};

export interface Product {
	brand: string;
	name: string;
	attribute: string;
	size: number;
}

export const useCreateSKU = ({
	brand,
	name,
	attribute,
	size,
}: Product): string => {
	const SKU = `
    ${brand.substring(0, 3).toUpperCase()}-
    ${name.substring(0, 3).toUpperCase()}-
    ${attribute.substring(0, 3).toUpperCase()}-
    ${size.toString().substring(0, 3)}
    `;

	return SKU;
};
