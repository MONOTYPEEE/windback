import Mention from "../schema/Mention"

const currentYear = new Date().getFullYear()

async function updateMention(mentionedUserId:string, userid:string, guildid:string, amount:number = 1){
    try{
        await Mention.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: { [`mention.${mentionedUserId}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

export default { updateMention }