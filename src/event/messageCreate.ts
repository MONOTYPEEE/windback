import { ClientEvents } from "discord.js";
import { client } from "..";

export default (event: ClientEvents) => {
    client.on('messageCreate', async message => {})
}