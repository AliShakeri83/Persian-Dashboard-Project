import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const category = await categoryService.createCategory(title);

    return successResponse(res, "Category created successfully", category, 201);
  } catch (err: any) {
    return errorResponse(res, err.message, 400);
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();

    return successResponse(res, "Categories fetched successfully", categories);
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryById(Number(req.params.id));

    return successResponse(res, "Category fetched successfully", category);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const category = await categoryService.updateCategory(Number(req.params.id), title);

    return successResponse(res, "Category updated successfully", category);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategory(Number(req.params.id));

    return successResponse(res, "Category deleted successfully", null);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
