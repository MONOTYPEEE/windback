import { ClientEvents } from "discord.js";
import { client } from '..'
import GamePlay from "../middleware/handleGameplay";

export default (event: ClientEvents) => {
    client.on('presenceUpdate', (oldPresence, nowPresence) => {
        GamePlay(oldPresence, nowPresence)
    })
}