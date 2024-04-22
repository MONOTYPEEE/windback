import { Message } from "discord.js";
import userRepository from "../../database/repository/userRepository";

export default function Mention(message:Message){
    if(!message.mentions.members || message.mentions.everyone){
        return
    }

    message.mentions.members.forEach(member=>{
        userRepository.updateMention(message.author.id, member.id, message.guildId ?? '')
    })
}
