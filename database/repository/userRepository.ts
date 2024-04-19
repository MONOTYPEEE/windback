import User from "../schema/User";

const currentYear = new Date().getFullYear(),
    currentDayofWeek = new Date().getDay(),
    currentHour = new Date().getHours()

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
    try{
        await User.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: {
                [`statistic.activity.daily.${currentHour}`]: amount,
                [`statistic.activity.weekly.${currentDayofWeek}`]: amount
            }
        })
    }
    catch(error){
        console.log(error)
    }
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