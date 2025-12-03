import { Router } from "express";
import * as productController from "../controllers/product.controller";

const productRouter = Router();
/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nike Air Max"
 *               price:
 *                 type: number
 *                 example: 129.99
 *               count:
 *                 type: integer
 *                 example: 50
 *               img_url:
 *                 type: string
 *                 example: "https://example.com/product.jpg"
 *               popularity:
 *                 type: integer
 *                 example: 10
 *               sale:
 *                 type: boolean
 *                 example: false
 *               color:
 *                 type: string
 *                 example: "Black"
 *               description:
 *                 type: string
 *                 example: "High-quality running shoes"
 *               categoryId:
 *                 type: integer
 *                 example: 3
 *             required:
 *               - title
 *               - price
 *               - count
 *               - img_url
 *               - popularity
 *               - sale
 *               - color
 *               - description
 *               - categoryId
 *     responses:
 *       201:
 *         description: Product created successfully
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
 *                   example: "Product created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Nike Air Max"
 *                     price:
 *                       type: number
 *                       example: 129.99
 *                     count:
 *                       type: integer
 *                       example: 50
 *                     img_url:
 *                       type: string
 *                       example: "https://example.com/product.jpg"
 *                     popularity:
 *                       type: integer
 *                       example: 10
 *                     sale:
 *                       type: boolean
 *                       example: false
 *                     color:
 *                       type: string
 *                       example: "Black"
 *                     description:
 *                       type: string
 *                       example: "High-quality running shoes"
 *                     categoryId:
 *                       type: integer
 *                       example: 3
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
productRouter.post("/", productController.createProduct);

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products retrieved successfully
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
 *                   example: "Products retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Nike Air Max"
 *                       price:
 *                         type: number
 *                         example: 129.99
 *                       count:
 *                         type: integer
 *                         example: 50
 *                       img_url:
 *                         type: string
 *                         example: "https://example.com/product.jpg"
 *                       popularity:
 *                         type: integer
 *                         example: 10
 *                       sale:
 *                         type: boolean
 *                         example: false
 *                       color:
 *                         type: string
 *                         example: "Black"
 *                       description:
 *                         type: string
 *                         example: "High-quality running shoes"
 *                       categoryId:
 *                         type: integer
 *                         example: 3
 *       500:
 *         description: Server error
 */
productRouter.get("/", productController.getAllProducts);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product fetched successfully
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
 *                   example: "Product fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Nike Air Max"
 *                     price:
 *                       type: number
 *                       example: 129.99
 *                     count:
 *                       type: integer
 *                       example: 20
 *                     img_url:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *                     popularity:
 *                       type: integer
 *                       example: 5
 *                     sale:
 *                       type: boolean
 *                       example: false
 *                     color:
 *                       type: string
 *                       example: "Black"
 *                     description:
 *                       type: string
 *                       example: "High-quality running shoe"
 *                     categoryId:
 *                       type: integer
 *                       example: 3
 *       404:
 *         description: Product not found
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
 *                   example: "Product not found"
 */
productRouter.get("/:id", productController.getProductById);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nike Air Max"
 *               price:
 *                 type: number
 *                 example: 129.99
 *               count:
 *                 type: integer
 *                 example: 20
 *               img_url:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *               popularity:
 *                 type: integer
 *                 example: 5
 *               sale:
 *                 type: boolean
 *                 example: false
 *               color:
 *                 type: string
 *                 example: "Black"
 *               description:
 *                 type: string
 *                 example: "High-quality running shoe"
 *               categoryId:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Product updated successfully
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
 *                   example: "Product updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Nike Air Max"
 *                     price:
 *                       type: number
 *                       example: 129.99
 *                     count:
 *                       type: integer
 *                       example: 20
 *                     img_url:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *                     popularity:
 *                       type: integer
 *                       example: 5
 *                     sale:
 *                       type: boolean
 *                       example: false
 *                     color:
 *                       type: string
 *                       example: "Black"
 *                     description:
 *                       type: string
 *                       example: "High-quality running shoe"
 *                     categoryId:
 *                       type: integer
 *                       example: 3
 *       404:
 *         description: Product not found
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
 *                   example: "Product not found"
 */
productRouter.put("/:id", productController.updateProduct);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
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
 *                   example: "Product deleted successfully"
 *       404:
 *         description: Product not found
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
 *                   example: "Product not found"
 */
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
