import { Orders } from "../models/Order";
import { IOrder } from "../types";

export const createOrder = async (data: IOrder) => {
  return await Orders.create(data);
};

export const getAllOrders = async () => {
  return await Orders.findAll();
};

export const getOrderById = async (id: number) => {
  const order = await Orders.findByPk(id);
  if (!order) {
    throw new Error("Order not found");
  }
  return order;
};

export const updateOrder = async (
  id: number,
  data: Partial<IOrder>
) => {
  const order = await Orders.findByPk(id);
  if (!order) {
    throw new Error("Order not found");
  }

  await order.update(data);
  return order;
};

export const deleteOrder = async (id: number) => {
  const order = await Orders.findByPk(id);
  if (!order) {
    throw new Error("Order not found");
  }

  await order.destroy();
};
