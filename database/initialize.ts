import mongoose from "mongoose";
import { config } from "./config";
import logger from "../utils/logger";
import { client } from "../bot";

export default function clientInitialize(){
    mongoose.connect(config.DB_URL, {
        dbName: 'WindBack'
    })
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
    client.login(config.TOKEN)
})

mongoose.connection.on('connecting', ()=>{
    logger.stat('Connecting Database...')
})