import { Message } from "discord.js";
import messageRepository from "../../database/repository/messageRepository";

export default function handleMedia(message:Message){
    const mediaTypes = ['image', 'video', 'audio'],
        filtered = message.attachments.filter(attachment=>{
            const contentType = attachment.contentType?.split('/')
            
            if(contentType && mediaTypes.includes(contentType[0])){
                return true
            }
        })

    messageRepository.updateCounts('media', message.author.id, message.guildId ?? '', filtered.size)
}