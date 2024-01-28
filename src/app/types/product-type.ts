export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  specifications: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    colors: string[];
  };
}
