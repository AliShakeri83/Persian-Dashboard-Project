import { Request, Response } from "express";
import * as productService from "../services/product.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    return successResponse(res, "Product created successfully", product, 201);
  } catch (err: any) {
    return errorResponse(res, err.message);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    return successResponse(res, "Products retrieved successfully", products);
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(Number(req.params.id));
    return successResponse(res, "Product fetched successfully", product);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(
      Number(req.params.id),
      req.body
    );
    return successResponse(res, "Product updated successfully", product);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.deleteProduct(Number(req.params.id));
    return successResponse(res, "Product deleted successfully");
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
