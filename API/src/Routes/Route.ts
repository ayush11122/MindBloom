import { Router } from "express";
const router = Router();

import UserRoutes from "./UserRoutes"
import BlogRoutes from "./BlogRoutes"


router.use('/user', UserRoutes)
router.use ('/blog', BlogRoutes)

export default router;