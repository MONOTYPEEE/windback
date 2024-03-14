import { readdirSync } from 'fs'
import path from 'path'
import { client } from '.'

export function eventHandler(){
    const eventPath = path.join(import.meta.dir, 'event'), 
        eventFile = readdirSync(eventPath)
        
    eventFile.forEach(async file=>{
        const event = await import(path.join(eventPath, file))
        event.default(client)
    })

    console.log(`[PRE] ${eventFile.length} events load`)
}