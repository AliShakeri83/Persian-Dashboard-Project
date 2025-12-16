import { Request, Response } from "express";
import * as commentService from "../services/comment.service";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await commentService.createComment(req.body);
    return successResponse(res, "Comment created successfully", comment, 201);
  } catch (err: any) {
    return errorResponse(res, err.message);
  }
};

export const getAllComments = async (_req: Request, res: Response) => {
  try {
    const comments = await commentService.getAllComments();
    return successResponse(res, "Comments retrieved successfully", comments);
  } catch (err: any) {
    return errorResponse(res, err.message, 500);
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  try {
    const comment = await commentService.getCommentById(
      Number(req.params.id)
    );
    return successResponse(res, "Comment fetched successfully", comment);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await commentService.updateComment(
      Number(req.params.id),
      req.body
    );
    return successResponse(res, "Comment updated successfully", comment);
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    await commentService.deleteComment(Number(req.params.id));
    return successResponse(res, "Comment deleted successfully");
  } catch (err: any) {
    return errorResponse(res, err.message, 404);
  }
};
