import User from "../schema/User";

async function updateKeyword(keyword:string, userid:string, guildid:string, amount:number = 1){
    try{
        const currentYear = new Date().getFullYear()

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

}

export default { updateKeyword, updateActivity, updateEmoji, updateMention }