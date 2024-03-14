import { client } from "..";

export default () => {
    client.on('ready', async (cli) => {
        console.log('\x1b[32m⏪ WindBack is ready as', `\x1b[1m ${cli.user.tag}`)
    })
}