
export interface ICategory {
  id: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProduct {
  id?: number;
  title: string;
  price: number;
  count: number;
  img_url?: string;
  popularity?: number;
  sale?: boolean;
  color?: string;
  description?: string;
  categoryId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
