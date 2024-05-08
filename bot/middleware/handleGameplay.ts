import { ActivityType, Presence } from "discord.js";
import userRepository from "../../database/repository/userRepository";

export default function handleGameplay(old:Presence|null, now:Presence){
    if(!old) return
    if(JSON.stringify(old.activities) === JSON.stringify(now.activities)) return
    
    try{
        old.activities.forEach(activity=>{
            if(activity.type === ActivityType.Playing){
                userRepository.updateGame(activity.name, now.userId, now.guild?.id ?? '', Date.now()-activity.createdTimestamp)
            }
        })
    }
    catch(err){
        console.log(err)
    }
}