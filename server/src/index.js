import RouterUser from './routes/Router.User.js'
import RouterProject from './routes/Router.Project.js'
import RouterTask from './routes/Router.Task.js'

import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

//import controllerUser from '../controllers/Controller.User.js'

// import database from './database/database.js'

let app = express();

// let conn = new database();

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors());

app.use('/user', RouterUser)
app.use('/project', RouterProject)
app.use('/task', RouterTask)

app.listen(process.env.PORT || 8010)

// app.get('/user',(req, res)=>)