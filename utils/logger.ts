import chalk from "chalk"

function stat(message:string){
    console.log(chalk.blue('[STAT]'), message)
}

function warn(message:string){
    console.log(chalk.yellow('[WARN]'), message)
}

function info(message:string){
    console.log(chalk.green('[INFO]'), message)
}

function err(message:string){
    console.log(chalk.bgRed('[ERROR]'), message)
}

export default {err, stat, warn, info}