import { Router } from "express";
import * as orderController from "../controllers/order.controller";

const orderRouter = Router();

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productID
 *               - productName
 *               - userID
 *               - username
 *               - date
 *               - hour
 *               - price
 *             properties:
 *               productID:
 *                 type: integer
 *                 example: 12
 *               productName:
 *                 type: string
 *                 example: "iPhone 15"
 *               userID:
 *                 type: integer
 *                 example: 7
 *               username:
 *                 type: string
 *                 example: "alireza"
 *               date:
 *                 type: string
 *                 example: "2025-01-15"
 *               hour:
 *                 type: string
 *                 example: "18:45"
 *               price:
 *                 type: string
 *                 example: "35000000"
 *               discount:
 *                 type: string
 *                 example: "WINTER10"
 *               sale:
 *                 type: integer
 *                 example: 10
 *               saleCount:
 *                 type: string
 *                 example: "1"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Order created successfully
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
 *                   example: "Order created successfully"
 *       400:
 *         description: Invalid input data
 */
orderRouter.post("/", orderController.createOrder);

/**
 * @swagger
 * /api/v1/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Orders fetched successfully
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
 *                   example: "Orders fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       productID:
 *                         type: integer
 *                       productName:
 *                         type: string
 *                       userID:
 *                         type: integer
 *                       username:
 *                         type: string
 *                       date:
 *                         type: string
 *                       hour:
 *                         type: string
 *                       price:
 *                         type: string
 *                       discount:
 *                         type: string
 *                       sale:
 *                         type: integer
 *                       saleCount:
 *                         type: string
 *                       isActive:
 *                         type: boolean
 *       500:
 *         description: Server error
 */
orderRouter.get("/", orderController.getAllOrders);

/**
 * @swagger
 * /api/v1/orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order fetched successfully
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
 *                   example: "Order fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     productID:
 *                       type: integer
 *                     productName:
 *                       type: string
 *                     userID:
 *                       type: integer
 *                     username:
 *                       type: string
 *                     date:
 *                       type: string
 *                     hour:
 *                       type: string
 *                     price:
 *                       type: string
 *                     discount:
 *                       type: string
 *                     sale:
 *                       type: integer
 *                     saleCount:
 *                       type: string
 *                     isActive:
 *                       type: boolean
 *       404:
 *         description: Order not found
 */
orderRouter.get("/:id", orderController.getOrderById);

/**
 * @swagger
 * /api/v1/orders/{id}:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productID:
 *                 type: integer
 *               productName:
 *                 type: string
 *               userID:
 *                 type: integer
 *               username:
 *                 type: string
 *               date:
 *                 type: string
 *               hour:
 *                 type: string
 *               price:
 *                 type: string
 *               discount:
 *                 type: string
 *               sale:
 *                 type: integer
 *               saleCount:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 */
orderRouter.put("/:id", orderController.updateOrder);

/**
 * @swagger
 * /api/v1/orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID
 *     responses:
 *       200:
 *         description: Order deleted successfully
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
 *                   example: "Order deleted successfully"
 *       404:
 *         description: Order not found
 */
orderRouter.delete("/:id", orderController.deleteOrder);

export default orderRouter;
