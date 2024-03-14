import chalk from "chalk";
import { client } from "..";

export default () => {
    client.on('ready', async (cli) => {
        console.log(chalk.greenBright('⏪ WindBack is ready as'), chalk.bgGreenBright.bold(cli.user.tag))
    })
}