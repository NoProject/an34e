import RouterUser from '@/src/routes/Router.User.js'
import RouterProject from '@/src/routes/Router.Project.js'
import RouterTask from '@/src/routes/Router.Task.js'

import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import database from '@/src/database/database.js'

let app = express();

let conn = new database();

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors());

app.use('/user', RouterUser)
app.use('/project', RouterProject)
app.use('/task', RouterTask)

app.listen(process.env.PORT || 8010)