import { Router } from 'express';
import { GetOneBlog, GetAllBlog, GetMyBlog ,PostBlog, UpdateBlog } from '../controllers/BlogController';
import { Auth } from '../middleware/Auth';

const router = Router();

router.get('/', Auth, GetAllBlog);
router.get('/myblog', Auth, GetMyBlog);
router.get('/:BlogId', Auth, GetOneBlog);
router.post('/', Auth, PostBlog);
router.put('/', Auth, UpdateBlog);


export default router;