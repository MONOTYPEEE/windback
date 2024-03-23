import mongoose from "mongoose";
import { config } from "../utils/config";
import chalk from "chalk";
import logger from "../utils/logger";

export default function dbConnect(){
    mongoose.connect(config.DB_URL)
}

mongoose.connection.on('error', () => {
    logger.err('Database Error')
})

mongoose.connection.on('disconnected', () => {
    logger.warn('Database Disconnected. Retrying...')
    dbConnect()
})

mongoose.connection.on('connected', ()=>{
    logger.stat('Database Connected!')
})

mongoose.connection.on('connecting', ()=>{
    logger.stat('Connecting Database...')
})