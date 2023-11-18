export type details = {
  description: string;
  rating: number;
  price: string;
} | null;

export type detailsStore = {
  details: details;
};

export type productsStore = {
  products: product[] | [];
};

export type product = {
  title?: string;
  images?: [string];
  id?: string;
  brand?: string;
  description?: string;
  rating?: number;
  price?: string;
};
