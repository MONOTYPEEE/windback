import mongoose, { Schema } from "mongoose"

const CurseSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    curse: {
        type: Object,
        default: {}
    }
})

export default mongoose.model('curse', CurseSchema)