import { Message } from "discord.js";
import { abuseEnglish, abuseKorean } from "../utils/dictionary";
import keywordRepository from "../../database/repository/keywordRepository";

export default function handleAbuse(message:Message){
    const matchedKorean = message.content.match(abuseKorean),
        matchedEnglish = message.content.match(abuseEnglish)
    
    if(matchedKorean){
        matchedKorean.forEach(word=>{
            keywordRepository.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
    if(matchedEnglish){
        matchedEnglish.forEach(word=>{
            keywordRepository.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
}