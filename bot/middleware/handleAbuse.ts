import { Message } from "discord.js";
import { abuseEnglish, abuseKorean } from "../utils/dictionary";
import userRepository from "../../database/repository/userRepository";

export default function handleAbuse(message:Message){
    const matchedKorean = message.content.match(abuseKorean),
        matchedEnglish = message.content.match(abuseEnglish)
    
    if(matchedKorean){
        matchedKorean.forEach(word=>{
            userRepository.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
    if(matchedEnglish){
        matchedEnglish.forEach(word=>{
            userRepository.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
}