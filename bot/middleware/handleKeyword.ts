import { Message } from "discord.js";
import Tokenization from "../utils/Tokenization";
import Preprocess from "../utils/Preprocess";
import keywordRepository from "../../database/repository/keywordRepository";

export default function handleKeyword(message:Message){
    const tokenized = Tokenization(Preprocess(message.content))

    if(tokenized){
        tokenized?.forEach((token)=>[
            keywordRepository.updateKeyword(token, message.author.id, message.guildId ?? '')
        ])
    }
}