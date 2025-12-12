import { Router } from "express"
import categoryRouter from "./category.routes";
import productRouter from "./product.routes";
import userRouter from "./user.routes";

const router = Router()

router.use("/categories", categoryRouter);

router.use("/products", productRouter);

router.use("/users", userRouter);

export default router;