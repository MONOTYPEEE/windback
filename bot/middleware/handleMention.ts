import { Message } from "discord.js";
import mentionRepository from "../../database/repository/mentionRepository";

export default function handleMention(message:Message){
    if(!message.mentions.members || message.mentions.everyone){
        return
    }

    message.mentions.members.forEach(member=>{
        mentionRepository.updateMention(message.author.id, member.id, message.guildId ?? '')
    })
}
