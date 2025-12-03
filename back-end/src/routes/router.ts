import { Router } from "express"
import categoryRouter from "./category.routes"

const router = Router()

router.use("/categories", categoryRouter);

export default router