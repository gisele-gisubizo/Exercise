import express from 'express'

import blogRouter from './blogRouter.js';

const BloggingRouter = express.Router();

BloggingRouter.use('/blog', blogRouter)

export default BloggingRouter;