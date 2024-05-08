import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    activity: {
        weekly: {
            type: [Number],
            default: [0, 0, 0, 0, 0, 0, 0]
        },
        daily: {
            type: [Number],
            default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    },
    lmao: {
        type: Number,
        default: 0
    },
    tprtm: {
        type: Number,
        default: 0
    },
    URL: {
        type: Number,
        default: 0
    },
    media: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('message', MessageSchema)