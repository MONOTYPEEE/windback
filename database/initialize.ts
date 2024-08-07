import mongoose from "mongoose";
import { config } from "./config";
import logger from "../utils/logger";

mongoose.connect(config.DB_URL, {
    dbName: 'WindBack'
})

mongoose.connection.on('error', () => {
    logger.err('Database Error')
})

mongoose.connection.on('disconnected', () => {
    logger.warn('Database Disconnected. Retrying...')
    // databaseInit()
})

mongoose.connection.on('connected', ()=>{
    logger.stat('Database Connected!')
})

mongoose.connection.on('connecting', ()=>{
    logger.stat('Connecting Database...')
})