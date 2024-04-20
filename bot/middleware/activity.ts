import { Message } from "discord.js";
import userController from "../../database/repository/userRepository";

export default function Activity(message:Message){
    userController.updateActivity(message.author.id, message.guildId ?? '')
}