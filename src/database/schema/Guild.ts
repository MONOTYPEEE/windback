import mongoose, { Schema } from "mongoose";

const GuildSchema = new Schema({
    "_id": String,
    "icon": String,
    "name": String
})

export default mongoose.model('guilds', GuildSchema)