import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
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
    },
    statistic: {
        keyword: {
            type: Object,
            default: {}
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
        emoji: {
            type: Object,
            default: {}
        },
        mention: {
            type: Object,
            default: {}
        },
        counts: {
            type: Object,
            default: {}
        },
    }
})

export default mongoose.model('users', UserScheme)