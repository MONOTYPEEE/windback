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

export default { updateEmoji }