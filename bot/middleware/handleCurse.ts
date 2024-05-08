import { Message } from "discord.js";
import { abuseEnglish, abuseKorean } from "../utils/dictionary";
import curseRepository from "../../database/repository/curseRepository";

export default function handleCurse(message:Message){
    const matchedKorean = message.content.match(abuseKorean),
        matchedEnglish = message.content.match(abuseEnglish)
    
    if(matchedKorean){
        matchedKorean.forEach(word=>{
            curseRepository.updateCurse(word, message.author.id, message.guildId ?? '')
        })
    }
    if(matchedEnglish){
        matchedEnglish.forEach(word=>{
            curseRepository.updateCurse(word, message.author.id, message.guildId ?? '')
        })
    }
}