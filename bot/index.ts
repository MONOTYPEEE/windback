import { Client, GatewayIntentBits } from 'discord.js'
import { eventHandler } from './handler'
import clientInitialize from '../database/initialize'
import { config } from '../database/config'

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
})

eventHandler()
clientInitialize()

client.login(config.TOKEN)