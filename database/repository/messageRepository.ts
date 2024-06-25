import Message from "../schema/Message"

const currentYear = new Date().getFullYear(),
    currentDayofWeek = new Date().getDay(),
    currentHour = new Date().getHours()

async function updateActivity(userid:string, guildid:string, amount:number = 1){
    try{
        await Message.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: {
                [`activity.daily.${currentHour}`]: amount,
                [`activity.weekly.${currentDayofWeek}`]: amount
            }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

async function updateCounts(kind:'lmao'|'tprtm'|'message'|'media'|'URL' ,userid:string, guildid:string, amount:Number){
    try{
        await Message.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: { [`${kind}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

async function getActivityArray(userid:string, guildid:string){
    try{
        return await Message.findById({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        }, {
            activity: 1,
            _id: 0
        })
        .lean()
    }
    catch(error){
        console.log(error)
    }
}

export default { updateActivity, updateCounts, getActivityArray }