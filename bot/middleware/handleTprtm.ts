import { Message } from "discord.js";
import { tprtmRegex } from "../utils/dictionary";
import userRepository from "../../database/repository/userRepository";

export default function handleTprtm(message: Message){
    const matched = message.content.match(tprtmRegex)

    if(matched){
        userRepository.updateCounts('tprtm', message.author.id, message.guildId ?? '', matched.length)
    }
}