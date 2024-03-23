import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
    _id: {
        guildId: String,
        userId: String
    },
    user: {
        nickname: String,
        username: String,
        profileImage: String,
        joinedAt: String
    },
    statistic: {
        type: Map,
        of: {
            type: Map,
            of: {
                keyword: { String: Number },
                activity: {
                    weekly: [Number],
                    daily: [Number]
                },
                emoji: { String: Number },
                mention: { String: Number },
                counts: { String: Number },
            }
        }
    }
})

export default mongoose.model('User', UserScheme)