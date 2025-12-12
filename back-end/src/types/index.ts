
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

export interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  username: string;
  password: number;
  phone?: string;
  city?: string;
  email: string;
  address?: string;
  score?: bigint;
  buy?: bigint;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  id?: number;
  body: string;
  date: string;
  hour: string;
  userID: number;
  username: string;
  productID: number;
  productName: string;
  isAction?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOrder {
  id?: number;
  productID: number;
  productName: string;
  userID: number;
  username: string;
  date: string;
  hour: string;
  price: bigint;
  off?: number;
  sale?: number;
  saleCount?: bigint;
  isActive?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDiscount {
  id?: number;
  code: string;
  precent: number;
  productID: number;
  productName: string;
  date: string;
  isActive?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
