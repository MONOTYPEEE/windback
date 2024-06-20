import express, { Router } from 'express'
import { getAvaliableGuild, getGuildInfo } from '../controller/guild'

const guildRouter:Router = express.Router()

guildRouter.get('/avaliable', getAvaliableGuild)
guildRouter.get('/:id(\\d{13,16})', getGuildInfo)

export default guildRouter