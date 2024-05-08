import mongoose, { Schema } from "mongoose";

const MentionSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    mention: {
        type: Object,
        default: {}
    }
})

export default mongoose.model('mention', MentionSchema)