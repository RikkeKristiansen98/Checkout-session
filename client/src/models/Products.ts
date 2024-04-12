export interface Products {
    id: string;
    name: string;
    description: string;
    default_price: {
        unit_amount: number;
    };
    images: string[];
}