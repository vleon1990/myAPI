import {Router} from 'express'
import {
  getProducts,
  getProduct,
  postProducts,
  updateProducts,
  deleteProducts
} from '../controllers/products.controller.js'
import fileUpload from 'express-fileupload'

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getProduct)

router.post('/products', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}) , postProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts)

export default router

