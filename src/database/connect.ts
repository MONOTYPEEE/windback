import mongoose from "mongoose";
import { config } from "../utils/config";
import chalk from "chalk";

export default function dbConnect(){
    mongoose.connect(config.DB_URL)
}

mongoose.connection.on('error', () => {
    console.log(chalk.red('[DB]'), 'Error')
})

mongoose.connection.on('disconnected', () => {
    console.log(chalk.yellow('[DB]'),'Database Disconnected. Retrying...')
    dbConnect()
})

mongoose.connection.on('connected', ()=>{
    console.log(chalk.greenBright('[DB]'),'Database Connected!')
})

mongoose.connection.on('connecting', ()=>{
    console.log(chalk.greenBright('[DB]'),'Database Connecting...')
})