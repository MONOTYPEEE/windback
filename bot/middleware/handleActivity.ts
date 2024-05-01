import { Message } from "discord.js";
import userRepository from "../../database/repository/userRepository";

export default function handleActivity(message:Message){
    userRepository.updateActivity(message.author.id, message.guildId ?? '')
}