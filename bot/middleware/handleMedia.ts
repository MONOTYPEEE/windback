import { Message } from "discord.js";
import messageRepository from "../../database/repository/messageRepository";

export default function handleMedia(message:Message){
    const mediaTypes = ['image', 'video', 'audio'],
        filtered = Array.from(message.attachments).filter(attachment=>{
            const contentType = attachment[1].contentType?.split('/')
            
            if(contentType?.length && mediaTypes.includes(contentType[0])){
                return true
            }
        })

    console.log(filtered)
    messageRepository.updateCounts('media', message.author.id, message.guildId ?? '', filtered.length)
}