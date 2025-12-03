import { Router } from "express"
import categoryRouter from "./category.routes"
import productRouter from "./product.routes";

const router = Router()

router.use("/categories", categoryRouter);

router.use("/products", productRouter);

export default router