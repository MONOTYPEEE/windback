import { Client, GatewayIntentBits } from 'discord.js'
import { config } from './utils/config'
import { eventHandler } from './handler'

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

client.login(config.TOKEN)