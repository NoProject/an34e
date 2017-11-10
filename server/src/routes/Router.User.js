import express from 'express'

import controllerUser from '@/src/controllers/Controller.User.js'

let router = express.Router()

let user = new controllerUser();

router.get('/user',(req, res)=> {
	user.getById(req, res);
})

router.post('/user',(req,res)=> {
	user.save(req, res)
})

router.put('/user',(req, res)=> {
	user.upDateById(req, res)
})

router.delete('/user', (req, res)=> {
	user.deleteById(req, res)
})

export default router;