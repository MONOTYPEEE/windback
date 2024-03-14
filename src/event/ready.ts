import chalk from "chalk";
import { client } from "..";

export default () => {
    client.on('ready', async (cli) => {
        console.log(chalk.green('⏪ WindBack is ready as'), chalk.bold.bgGreenBright(cli.user.tag))
    })
}