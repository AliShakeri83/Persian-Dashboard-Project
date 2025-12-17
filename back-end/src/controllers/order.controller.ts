import { Request, Response } from "express";
import * as orderService from "../services/order.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    return successResponse(res, "Order created successfully", order, 201);
  } catch (err: any) {
    return errorResponse(res, err.message, 400);
  }
};

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    return successResponse(res, "Orders fetched successfully", orders);
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(
      Number(req.params.id)
    );
    return successResponse(res, "Order fetched successfully", order);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrder(
      Number(req.params.id),
      req.body
    );
    return successResponse(res, "Order updated successfully", order);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    await orderService.deleteOrder(Number(req.params.id));
    return successResponse(res, "Order deleted successfully", null);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
