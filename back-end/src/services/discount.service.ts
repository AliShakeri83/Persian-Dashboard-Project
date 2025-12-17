import { Discount } from "../models/Discount";
import { IDiscount } from "../types";

export const createDiscount = async (data: IDiscount) => {
  return await Discount.create(data);
};

export const getAllDiscounts = async () => {
  return await Discount.findAll();
};

export const getDiscountById = async (id: number) => {
  const discount = await Discount.findByPk(id);
  if (!discount) {
    throw new Error("Discount not found");
  }
  return discount;
};

export const updateDiscount = async (
  id: number,
  data: Partial<IDiscount>
) => {
  const discount = await Discount.findByPk(id);

  if (!discount) {
    throw new Error("Discount not found");
  }

  await discount.update(data);
  return discount;
};

export const deleteDiscount = async (id: number) => {
  const discount = await Discount.findByPk(id);

  if (!discount) {
    throw new Error("Discount not found");
  }

  await discount.destroy();
};
