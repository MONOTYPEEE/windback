import Emoji from "../schema/Emoji"

const currentYear = new Date().getFullYear()

async function updateEmoji(emoji:string, userid:string, guildid:string, amount:number = 1){
    try{
        await Emoji.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: {
                [`emoji.${emoji}`]: amount
            }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

async function getEmoji(userid:string, guildid:string){
    try{
        return await Emoji.findById({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        }, {
            emoji: 1,
            _id: 0
        })
        .lean()
    }
    catch(error){
        console.log(error)
    }
}

export default { updateEmoji, getEmoji }