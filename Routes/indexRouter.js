import express from 'express'

import productRouter from './ProductRouter.js';

const mainRouter = express.Router();

mainRouter.use('/products', productRouter)

export default mainRouter;