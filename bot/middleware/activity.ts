import { Message } from "discord.js";
import userRepository from "../../database/repository/userRepository";

export default function Activity(message:Message){
    userRepository.updateActivity(message.author.id, message.guildId ?? '')
}