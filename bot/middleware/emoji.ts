import { Message } from "discord.js";
import { customEmojiRegex, unicodeEmojiRegex } from "../utils/dictionary";
import userRepository from "../../database/repository/userRepository";
import getEmojiIdFromString from "../utils/getCustomEmojiIdFromString";

export default function Emoji(message: Message){
    const RGIEmoji = message.content.match(unicodeEmojiRegex),
        CustomEmoji = message.content.match(customEmojiRegex)

    console.log(message.content, RGIEmoji, CustomEmoji)

    RGIEmoji?.forEach(emoji=>{
        userRepository.updateEmoji(emoji, message.author.id, message.guildId ?? '')
    })
    CustomEmoji?.forEach(emoji=>{
        userRepository.updateEmoji(getEmojiIdFromString(emoji), message.author.id, message.guildId ?? '')
    })
}