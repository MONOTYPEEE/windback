import mongoose, { Schema } from "mongoose";

const GuildScheme = new Schema({
    guild:{
        id: String,
        name: String,
        icon: String
    },
    users:{
        type: Map,
        of: {
            name: String,
            tag: String,
            icon: String,
            joinAt: String
        }
    },
    message: {
        type: Map,
        of:{
            keywords:{
                type: Map,
                of: {
                    type: Map,
                    of: Number
                }
            },
            activity:{
                type: Map,
                of: Number
            },
            emoji:{
                type: Map,
                of: Number
            },
            mention:{
                type: Map,
                of: Number
            },
            statistic:{
                type: Map,
                of: Number
            }
        }
    }
})

export default mongoose.model('Guild', GuildScheme)