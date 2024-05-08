import Curse from "../schema/Curse"

const currentYear = new Date().getFullYear()

async function updateCurse(word:string, userid:string, guildid:string, amount:number = 1){
    try{
        await Curse.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        }, {
            $inc: { [`curse.${word}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

export default { updateCurse }