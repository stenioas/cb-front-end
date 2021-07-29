type Installments = [
	{
		quantity: number;
		value: number;
	}
];

export type Product = {
	productId: number;
	productName: string;
	stars: number;
	imageUrl: string;
	listPrice: number | null;
	price: number;
	installments: Installments;
};

export type Products = Product[];
