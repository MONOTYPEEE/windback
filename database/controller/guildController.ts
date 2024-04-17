import Guild from "../schema/Guild"

async function updateGuild(guildid:string, icon:string|null, name:string){
    try{
        await Guild.findByIdAndUpdate(guildid, {
            "_id": guildid,
            "icon": icon,
            "name": name
        },{
            upsert: true
        })
    }
    catch(error){
        console.log(error)
    }
}

async function findGuild(guildid:string){
    try{
        return await Guild.findById(guildid)
    }
    catch(error){
        console.log(error)
    }
}

export default { updateGuild, findGuild }