import { Message } from "discord.js";
import { LmaoRegex } from "../utils/dictionary";
import userRepository from "../../database/repository/userRepository";

export default function handleLmao(message:Message){
    const matched = message.content.match(LmaoRegex)

    if(matched){
        const matchedLength = matched.reduce((p,c)=> p + c.length,0)

        userRepository.updateCounts('lmao', message.author.id, message.guildId ?? '', matchedLength)
    }
}