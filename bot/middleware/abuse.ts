import { Message } from "discord.js";
import { abuseEnglish, abuseKorean } from "../utils/dictionary";
import userController from "../../database/controller/userController";

export default function AbueseMatch(message:Message){
    const matchedKorean = message.content.match(abuseKorean),
        matchedEnglish = message.content.match(abuseEnglish)
    
    if(matchedKorean){
        matchedKorean.forEach(word=>{
            userController.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
    if(matchedEnglish){
        matchedEnglish.forEach(word=>{
            userController.updateKeyword(word, message.author.id, message.guildId ?? '')
        })
    }
}