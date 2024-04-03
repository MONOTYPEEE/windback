import User from "../schema/User";

const currentYear = new Date().getFullYear()

async function updateKeyword(keyword:string, userid:string, guildid:string, amount:number = 1){
    try{
        await User.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        }, {
            $inc: { [`statistic.keyword.${keyword}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

async function updateActivity(userid:string, guildid:string, amount:number = 1){

}

async function updateEmoji(emoji:string, userid:string, guildid:string, amount:number = 1){

}

async function updateMention(mentionedUserId:string, userid:string, guildid:string, amount:number = 1){
    try{
        await User.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: { [`statistic.mention.${mentionedUserId}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

export default { updateKeyword, updateActivity, updateEmoji, updateMention }