import Keyword from "../schema/Keyword"

const currentYear = new Date().getFullYear()

async function updateKeyword(keyword:string, userid:string, guildid:string, amount:number = 1){
    try{
        await Keyword.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        }, {
            $inc: { [`statistic.${keyword}`]: amount }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

export default { updateKeyword }