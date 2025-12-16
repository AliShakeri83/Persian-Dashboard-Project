import { Router } from "express";
import * as commentController from "../controllers/comment.controller";

const commentRouter = Router();

/**
 * @swagger
 * /api/v1/comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - body
 *               - date
 *               - hour
 *               - userID
 *               - username
 *               - productID
 *               - productName
 *             properties:
 *               body:
 *                 type: string
 *                 example: "Great product!"
 *               date:
 *                 type: string
 *                 example: "2025-12-16"
 *               hour:
 *                 type: string
 *                 example: "14:30"
 *               userID:
 *                 type: integer
 *                 example: 5
 *               username:
 *                 type: string
 *                 example: "alireza"
 *               productID:
 *                 type: integer
 *                 example: 12
 *               productName:
 *                 type: string
 *                 example: "Nike Air Max"
 *               isAction:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Comment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comment created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     body:
 *                       type: string
 *                       example: "Great product!"
 *       400:
 *         description: Invalid input
 */
commentRouter.post("/", commentController.createComment);

/**
 * @swagger
 * /api/v1/comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Comments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comments retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       body:
 *                         type: string
 *                         example: "Great product!"
 *                       date:
 *                         type: string
 *                         example: "2025-12-16"
 *                       hour:
 *                         type: string
 *                         example: "14:30"
 *                       userID:
 *                         type: integer
 *                         example: 5
 *                       username:
 *                         type: string
 *                         example: "alireza"
 *                       productID:
 *                         type: integer
 *                         example: 12
 *                       productName:
 *                         type: string
 *                         example: "Nike Air Max"
 *                       isAction:
 *                         type: boolean
 *                         example: true
 *       500:
 *         description: Server error
 */
commentRouter.get("/", commentController.getAllComments);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   get:
 *     summary: Get a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Comment fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comment fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     body:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Comment not found
 */
commentRouter.get("/:id", commentController.getCommentById);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   put:
 *     summary: Update a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               body:
 *                 type: string
 *                 example: "Updated comment text"
 *               isAction:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comment updated successfully"
 *                 data:
 *                   type: object
 *       404:
 *         description: Comment not found
 */
commentRouter.put("/:id", commentController.updateComment);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Comment deleted successfully"
 *       404:
 *         description: Comment not found
 */
commentRouter.delete("/:id", commentController.deleteComment);

export default commentRouter;
