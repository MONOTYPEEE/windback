import { ClientEvents } from "discord.js";
import { client } from "..";
import handleCurse from "../middleware/handleCurse";
import handleMention from "../middleware/handleMention";
import handleActivity from "../middleware/handleActivity";
import handleLmao from "../middleware/handleLmao";
import handleTprtm from "../middleware/handleTprtm";
import handleEmoji from "../middleware/handleEmoji";
import handleKeyword from "../middleware/handleKeyword";
import handleMedia from "../middleware/handleMedia";

export default (event: ClientEvents) => {
    client.on('messageCreate', async message => {
        handleCurse(message)
        handleMention(message)
        handleActivity(message)
        handleLmao(message)
        handleTprtm(message)
        handleEmoji(message)
        handleKeyword(message)
        handleMedia(message)
    })
}