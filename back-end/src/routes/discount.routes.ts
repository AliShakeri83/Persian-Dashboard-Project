import { Router } from "express";
import * as discountController from "../controllers/discount.controller";

const discountRouter = Router();


/**
 * @swagger
 * /api/v1/discounts:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - precent
 *               - productID
 *               - productName
 *               - date
 *             properties:
 *               code:
 *                 type: string
 *                 example: "SUMMER20"
 *               precent:
 *                 type: integer
 *                 example: 20
 *               productID:
 *                 type: integer
 *                 example: 5
 *               productName:
 *                 type: string
 *                 example: "Nike Shoes"
 *               date:
 *                 type: string
 *                 example: "2025-01-01"
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Discount created successfully
 *       400:
 *         description: Invalid input data
 */
discountRouter.post("/", discountController.createDiscount);

/**
 * @swagger
 * /api/v1/discounts:
 *   get:
 *     summary: Get all discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: Discounts fetched successfully
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
 *                   example: "Discounts fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Discount'
 *       500:
 *         description: Server error
 */
discountRouter.get("/", discountController.getAllDiscounts);


/**
 * @swagger
 * /api/v1/discounts/{id}:
 *   get:
 *     summary: Get a discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the discount
 *     responses:
 *       200:
 *         description: Discount fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiscountResponse'
 *       404:
 *         description: Discount not found
 */
discountRouter.get("/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/v1/discounts/{id}:
 *   put:
 *     summary: Update a discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "WINTER30"
 *               precent:
 *                 type: integer
 *                 example: 30
 *               productID:
 *                 type: integer
 *                 example: 10
 *               productName:
 *                 type: string
 *                 example: "Adidas Jacket"
 *               date:
 *                 type: string
 *                 example: "2025-02-01"
 *               isActive:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Discount updated successfully
 *       404:
 *         description: Discount not found
 */
discountRouter.put("/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/v1/discounts/{id}:
 *   delete:
 *     summary: Delete a discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the discount to delete
 *     responses:
 *       200:
 *         description: Discount deleted successfully
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
 *                   example: "Discount deleted successfully"
 *       404:
 *         description: Discount not found
 */
discountRouter.delete("/:id", discountController.deleteDiscount);

export default discountRouter;