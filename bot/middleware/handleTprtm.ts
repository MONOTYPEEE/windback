import { Message } from "discord.js";
import { tprtmRegex } from "../utils/dictionary";
import messageRepository from "../../database/repository/messageRepository";

export default function handleTprtm(message: Message){
    const matched = message.content.match(tprtmRegex)

    if(matched){
        messageRepository.updateCounts('tprtm', message.author.id, message.guildId ?? '', matched.length)
    }
}