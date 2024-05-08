import { Message } from "discord.js";
import { LmaoRegex } from "../utils/dictionary";
import messageRepository from "../../database/repository/messageRepository";

export default function handleLmao(message:Message){
    const matched = message.content.match(LmaoRegex)

    if(matched){
        const matchedLength = matched.reduce((p,c)=> p + c.length,0)

        messageRepository.updateCounts('lmao', message.author.id, message.guildId ?? '', matchedLength)
    }
}