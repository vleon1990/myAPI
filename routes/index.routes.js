import {Router} from 'express'

const router = Router()

router.get('/',(req,res) => res.send('Hola 5'))

router.get('/ping',(req,res) => res.send('pong'))

export default router