import { Router } from "express"
import categoryRouter from "./category.routes";
import productRouter from "./product.routes";
import userRouter from "./user.routes";
import commentRouter from "./comment.routes";
import discountRouter from "./discount.routes";

const router = Router()

router.use("/categories", categoryRouter);

router.use("/products", productRouter);

router.use("/users", userRouter);

router.use("/comments", commentRouter);

router.use("/discounts", discountRouter);

export default router;