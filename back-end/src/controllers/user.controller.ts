import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    return successResponse(res, "User created successfully", user, 201);
  } catch (err: any) {
    return errorResponse(res, err.message);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    return successResponse(res, "Users retrieved successfully", users);
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(Number(req.params.id));
    return successResponse(res, "User fetched successfully", user);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(Number(req.params.id), req.body);
    return successResponse(res, "User updated successfully", user);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(Number(req.params.id));
    return successResponse(res, "User deleted successfully");
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
