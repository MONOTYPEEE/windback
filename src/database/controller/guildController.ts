import Guild from "../schema/Guild"

async function updateGuild(guildid:string, icon:string|null, name:string){
    await Guild.findByIdAndUpdate(guildid, {
        "_id": guildid,
        "icon": icon,
        "name": name
    },{
        upsert: true
    })
}

export default { updateGuild }