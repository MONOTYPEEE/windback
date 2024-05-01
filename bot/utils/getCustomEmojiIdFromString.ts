export default function getEmojiIdFromString(string: String){
    return string.split(':')[2].slice(0,-1)
}