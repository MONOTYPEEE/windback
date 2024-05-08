import mongoose, { Schema } from "mongoose";

const EmojiSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    emoji: {
        type: Object,
        default: {}
    }
})

export default mongoose.model('emoji', EmojiSchema)