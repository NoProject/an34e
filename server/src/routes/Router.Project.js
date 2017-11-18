import express from 'express'

import controllerProject from '../controllers/Controller.Project.js'

let routerProject = express.Router()

let project = new controllerProject()

routerProject.get('/', (req, res)=> {
	project.getById(req, res);
})

routerProject.post('/post', (req, res)=> {
	project.save(req, res);
})

routerProject.put('/put', (req, res)=> {
	project.updateById(req, res)
})

routerProject.delete('/delete', (req, res)=> {
	project.deleteById(req, res)
})

export default routerProject