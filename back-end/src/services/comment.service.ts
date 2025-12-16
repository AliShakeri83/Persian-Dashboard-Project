import { Comment } from "../models/Comment";
import { IComment } from "../types";

export const createComment = async (data: IComment) => {
  return await Comment.create(data);
};

export const getAllComments = async () => {
  return await Comment.findAll({
    order: [["createdAt", "DESC"]],
  });
};

export const getCommentById = async (id: number) => {
  const comment = await Comment.findByPk(id);
  if (!comment) throw new Error("Comment not found");
  return comment;
};

export const updateComment = async (id: number, data: Partial<IComment>) => {
  const comment = await Comment.findByPk(id);
  if (!comment) throw new Error("Comment not found");

  await comment.update(data);
  return comment;
};

export const deleteComment = async (id: number) => {
  const comment = await Comment.findByPk(id);
  if (!comment) throw new Error("Comment not found");

  await comment.destroy();
  return { message: "Comment deleted successfully" };
};
