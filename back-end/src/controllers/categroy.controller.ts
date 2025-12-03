import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const category = await categoryService.createCategory(title);
    res.status(201).json(category);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.getCategoryById(Number(req.params.id));
    res.json(category);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const category = await categoryService.updateCategory(Number(req.params.id), title);
    res.json(category);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategory(Number(req.params.id));
    res.json({ message: "Category deleted successfully" });
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};
