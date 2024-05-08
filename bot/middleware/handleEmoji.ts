import { Message } from "discord.js";
import { customEmojiRegex, unicodeEmojiRegex } from "../utils/dictionary";
import emojiRepository from "../../database/repository/emojiRepository";
import getEmojiIdFromString from "../utils/getCustomEmojiIdFromString";

export default function handleEmoji(message: Message){
    const RGIEmoji = message.content.match(unicodeEmojiRegex),
        CustomEmoji = message.content.match(customEmojiRegex)

    RGIEmoji?.forEach(emoji=>{
        emojiRepository.updateEmoji(emoji, message.author.id, message.guildId ?? '')
    })
    CustomEmoji?.forEach(emoji=>{
        emojiRepository.updateEmoji(getEmojiIdFromString(emoji), message.author.id, message.guildId ?? '')
    })
}