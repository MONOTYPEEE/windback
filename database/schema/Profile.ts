import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema({
    _id: {
        guildId: String,
        userId: String,
        year: Number
    },
    user: {
        nickname: String,
        username: String,
        profileImage: String,
        joinedAt: String
    }
})

export default mongoose.model('profile', ProfileSchema)