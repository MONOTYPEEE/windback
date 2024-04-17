import { Message } from "discord.js";
import userController from "../../database/controller/userController";

export default function Mention(message:Message){
    if(!message.mentions.members || message.mentions.everyone){
        return
    }

    message.mentions.members.forEach(member=>{
        userController.updateMention(message.author.id, member.id, message.guildId ?? '')
    })
}
