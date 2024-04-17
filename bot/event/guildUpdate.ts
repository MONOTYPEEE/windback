import { ClientEvents } from "discord.js"
import { client } from ".."
import guildController from "../../database/controller/guildController"

export default (event: ClientEvents) => {
    client.on('guildUpdate', async (oldGuild, newGuild) => {
        if(oldGuild.name !== newGuild.name || oldGuild.id !== newGuild.id || oldGuild.icon !== newGuild.icon){
            guildController.updateGuild(newGuild.id, newGuild.iconURL(), newGuild.name)
        }
    })
}