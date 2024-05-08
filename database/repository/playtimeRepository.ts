import Playtime from "../schema/Playtime"

const currentYear = new Date().getFullYear()

async function updatePlaytime(title:string, userid:string , guildid: string, time:number){
    try{
        await Playtime.findByIdAndUpdate({
            'guildId': guildid,
            'userId': userid,
            'year': currentYear
        },{
            $inc: {
                [`playtime.${title}`]: time
            }
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

export default { updatePlaytime }