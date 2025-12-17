import { Request, Response } from "express";
import * as discountService from "../services/discount.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createDiscount = async (req: Request, res: Response) => {
  try {
    const discount = await discountService.createDiscount(req.body);

    return successResponse(
      res,
      "Discount created successfully",
      discount,
      201
    );
  } catch (err: any) {
    return errorResponse(res, err.message, 400);
  }
};

export const getAllDiscounts = async (req: Request, res: Response) => {
  try {
    const discounts = await discountService.getAllDiscounts();

    return successResponse(
      res,
      "Discounts fetched successfully",
      discounts
    );
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getDiscountById = async (req: Request, res: Response) => {
  try {
    const discount = await discountService.getDiscountById(
      Number(req.params.id)
    );

    return successResponse(
      res,
      "Discount fetched successfully",
      discount
    );
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateDiscount = async (req: Request, res: Response) => {
  try {
    const discount = await discountService.updateDiscount(
      Number(req.params.id),
      req.body
    );

    return successResponse(
      res,
      "Discount updated successfully",
      discount
    );
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteDiscount = async (req: Request, res: Response) => {
  try {
    await discountService.deleteDiscount(Number(req.params.id));

    return successResponse(res, "Discount deleted successfully", null);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
