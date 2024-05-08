import mongoose, { Schema } from "mongoose"

const KeywordSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    keyword: {
        type: Object,
        default: {}
    }
})

export default mongoose.model('keyword', KeywordSchema)