import RouterUser from './routes/Router.User.js'
import RouterProject from './routes/Router.Project.js'
import RouterTask from './routes/Router.Task.js'

import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import session from 'express-session'

//import controllerUser from '../controllers/Controller.User.js'

//import database from './database/database.js'

//const db = new database();

let app = express();

// let conn = new database();

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors({
	//cors configuration
	origin: ['http://localhost:8080'],
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true
}))
app.use(session({
	path: '/',
	secret: 'A1pt3Eds@31_231spaA',
	cookie : {maxAge : 6000000}
}))

app.use('/user', RouterUser)
app.use('/project', RouterProject)
app.use('/task', RouterTask)

app.listen(process.env.PORT || 8010)

// app.get('/user',(req, res)=>)