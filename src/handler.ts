import { readdirSync } from 'fs'
import path from 'path'
import { client } from '.'
import chalk from 'chalk'
import logger from './utils/logger'

export function eventHandler(){
    const eventPath = path.join(import.meta.dir, 'event'), 
        eventFile = readdirSync(eventPath)

    logger.stat('Loading Events...')

    eventFile.forEach(async file=>{
        const event = await import(path.join(eventPath, file))
        try{
            event.default(client)
        }
        catch(err){
            logger.err('Failed to Load Events')
        }
    })
}