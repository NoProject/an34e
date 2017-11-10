import express from 'express'

import controllerProject from '@/src/controllers/Controller.Project.js'

let router = express.Router()

let project = new controllerProject()

router.get('/project', (req, res)=> {
	project.getById(req, res);
})

router.post('/project', (req, res)=> {
	project.save(req, res);
})

router.put('/project', (req, res)=> {
	project.updateById(req, res)
})

router.delete('/project', (req, res)=> {
	project.deleteById(req, res)
})

export default router