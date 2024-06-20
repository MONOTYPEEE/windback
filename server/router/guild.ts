import express, { Router } from 'express'
import { getAvaliableGuild, getGuildInfo } from '../controller/guild'

const guildRouter:Router = express.Router()

guildRouter.get('/avaliable', getAvaliableGuild)
guildRouter.get('/:id', getGuildInfo)

export default guildRouter