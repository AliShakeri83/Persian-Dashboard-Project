import { Router } from "express";
import * as userController from "../controllers/user.controller";

const router = Router();

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Alireza"
 *               lastname:
 *                 type: string
 *                 example: "Moradi"
 *               username:
 *                 type: string
 *                 example: "alireza123"
 *               password:
 *                 type: string
 *                 example: "mypassword123"
 *               phone:
 *                 type: string
 *                 example: "+358401234567"
 *               city:
 *                 type: string
 *                 example: "Helsinki"
 *               email:
 *                 type: string
 *                 example: "alireza@example.com"
 *               address:
 *                 type: string
 *                 example: "My street, My city"
 *             required:
 *               - firstname
 *               - lastname
 *               - username
 *               - password
 *               - email
 *     responses:
 *       201:
 *         description: User created successfully
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
 *                   example: "User created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstname:
 *                       type: string
 *                       example: "Alireza"
 *                     lastname:
 *                       type: string
 *                       example: "Moradi"
 *                     username:
 *                       type: string
 *                       example: "alireza123"
 *                     email:
 *                       type: string
 *                       example: "alireza@example.com"
 *                     phone:
 *                       type: string
 *                       example: "+358401234567"
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
router.post("/", userController.createUser);

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users retrieved successfully
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
 *                   example: "Users retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       firstname:
 *                         type: string
 *                         example: "Alireza"
 *                       lastname:
 *                         type: string
 *                         example: "Moradi"
 *                       username:
 *                         type: string
 *                         example: "alireza123"
 *                       email:
 *                         type: string
 *                         example: "alireza@example.com"
 *                       phone:
 *                         type: string
 *                         example: "+358401234567"
 *                       city:
 *                         type: string
 *                         example: "Helsinki"
 *                       address:
 *                         type: string
 *                         example: "My street, My city"
 *       500:
 *         description: Server error
 */
router.get("/", userController.getAllUsers);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to retrieve
 *     responses:
 *       200:
 *         description: User fetched successfully
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
 *                   example: "User fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstname:
 *                       type: string
 *                       example: "Alireza"
 *                     lastname:
 *                       type: string
 *                       example: "Moradi"
 *                     username:
 *                       type: string
 *                       example: "alireza123"
 *                     email:
 *                       type: string
 *                       example: "alireza@example.com"
 *                     phone:
 *                       type: string
 *                       example: "+358401234567"
 *                     city:
 *                       type: string
 *                       example: "Helsinki"
 *                     address:
 *                       type: string
 *                       example: "My street, My city"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Server error
 */
router.get("/:id", userController.getUserById);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "Alireza"
 *               lastname:
 *                 type: string
 *                 example: "Moradi"
 *               username:
 *                 type: string
 *                 example: "alireza123"
 *               email:
 *                 type: string
 *                 example: "alireza@example.com"
 *               phone:
 *                 type: string
 *                 example: "+358401234567"
 *               city:
 *                 type: string
 *                 example: "Helsinki"
 *               address:
 *                 type: string
 *                 example: "My street, My city"
 *     responses:
 *       200:
 *         description: User updated successfully
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
 *                   example: "User updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstname:
 *                       type: string
 *                       example: "Alireza"
 *                     lastname:
 *                       type: string
 *                       example: "Moradi"
 *                     username:
 *                       type: string
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Server error
 */
router.put("/:id", userController.updateUser);

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
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
 *                   example: "User deleted successfully"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Server error
 */
router.delete("/:id", userController.deleteUser);

export default router;
