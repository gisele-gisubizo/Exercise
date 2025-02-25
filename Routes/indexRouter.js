import express from 'express'

import productRouter from './ProductRouter.js';

const indexRouter = express.Router();

indexRouter.use('/products', productRouter)

export default indexRouter;