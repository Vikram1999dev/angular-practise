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
    material: string;
    additionalAttribute1: string;
    additionalAttribute2: number;
    additionalAttribute3: boolean;
    additionalAttribute4: string[];
    additionalAttribute5: Date;
  };
}
