import { Router } from "express";
import UserRoutes from "./UserRoutes"
import BlogRoutes from "./BlogRoutes"


const router = Router();

router.use('/user', UserRoutes)
router.use ('/blog', BlogRoutes)

export default router;