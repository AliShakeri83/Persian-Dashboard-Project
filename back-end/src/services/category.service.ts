import { Category } from "../models/Category";

export const createCategory = async (title: string) => {
  const category = await Category.create({ title });
  return category;
};

export const getAllCategories = async () => {
  return await Category.findAll();
};

export const getCategoryById = async (id: number) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Category not found");
  return category;
};

export const updateCategory = async (id: number, title: string) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Category not found");

  category.title = title || category.title;
  await category.save();
  return category;
};

export const deleteCategory = async (id: number) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Category not found");

  await category.destroy();
  return true;
};
