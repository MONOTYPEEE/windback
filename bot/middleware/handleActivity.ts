import { Message } from "discord.js";
import messageRepository from "../../database/repository/messageRepository";

export default function handleActivity(message:Message){
    messageRepository.updateActivity(message.author.id, message.guildId ?? '')
}