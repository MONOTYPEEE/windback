import { ClientEvents } from "discord.js";
import { client } from "..";
import AbueseMatch from "../middleware/abuse";
import Mention from "../middleware/mention";
import Activity from "../middleware/activity";

export default (event: ClientEvents) => {
    client.on('messageCreate', async message => {
        AbueseMatch(message)
        Mention(message)
        Activity(message)
    })
}