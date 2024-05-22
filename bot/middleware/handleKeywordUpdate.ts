import { Message, PartialMessage } from "discord.js";
import keywordRepository from "../../database/repository/keywordRepository";
import Tokenization from "../utils/Tokenization";
import Preprocess from "../utils/Preprocess";

export default function handleKeywordUpdate(old:Message|PartialMessage, now:Message|PartialMessage){
    if(old.content !== now.content){
        const userId = old.author?.id ?? now.author?.id ?? '',
            guildId = old.guildId ?? now.guildId ?? ''
        const tokenizedOld = Tokenization(Preprocess(old.content ?? '')),
            tokenizedNow = Tokenization(Preprocess(now.content ?? ''))

        if(tokenizedOld){
            tokenizedOld.forEach((token)=>{
                keywordRepository.updateKeyword(token, userId, guildId, -1)
            })
        }
        if(tokenizedNow){
            tokenizedNow.forEach((token)=>{
                keywordRepository.updateKeyword(token, userId, guildId)
            })
        }
    }
}