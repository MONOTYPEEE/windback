import { ClientEvents, Message } from "discord.js";
import { client } from "..";
import handleKeywordUpdate from "../middleware/handleKeywordUpdate";

export default (event: ClientEvents) => {
    client.on('messageUpdate', async (oldMessage, newMessage) => {
        handleKeywordUpdate(oldMessage, newMessage)
    })
}