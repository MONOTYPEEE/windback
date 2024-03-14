import { readdirSync } from 'fs'
import path from 'path'
import { client } from '.'
import chalk from 'chalk'

export function eventHandler(){
    const eventPath = path.join(import.meta.dir, 'event'), 
        eventFile = readdirSync(eventPath)

    console.log(chalk.blue('[PRE]'), 'loading Events')

    eventFile.forEach(async file=>{
        const event = await import(path.join(eventPath, file))
        try{
            event.default(client)
        }
        catch(err){
            console.log(chalk.red('[PRE]'), 'Error while loading', file)
        }
    })
}