import mongoose, { Schema } from "mongoose";

const PlaytimeSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    playtime:{
        type: Object,
        default: {}
    }
})

export default mongoose.model('playtime', PlaytimeSchema)