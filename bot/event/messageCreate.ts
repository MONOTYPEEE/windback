import { ClientEvents } from "discord.js";
import { client } from "..";
import handleAbuese from "../middleware/handleAbuse";
import handleMention from "../middleware/handleMention";
import handleActivity from "../middleware/handleActivity";
import handleLmao from "../middleware/handleLmao";
import handleTprtm from "../middleware/handleTprtm";
import handleEmoji from "../middleware/handleEmoji";

export default (event: ClientEvents) => {
    client.on('messageCreate', async message => {
        handleAbuese(message)
        handleMention(message)
        handleActivity(message)
        handleLmao(message)
        handleTprtm(message)
        handleEmoji(message)
    })
}