import { Client, GatewayIntentBits } from 'discord.js'
import { config } from '../database/config'
import { eventHandler } from './handler'
import dbConnect from '../database/connect'

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
})

eventHandler()
dbConnect()

client.login(config.TOKEN)