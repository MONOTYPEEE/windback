import express, { Router } from 'express'
import { getAvaliableGuild } from '../controller/guild'

const guildRouter:Router = express.Router()

guildRouter.get('/avaliable', getAvaliableGuild)

export default guildRouter