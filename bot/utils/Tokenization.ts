export default function Tokenization(string:string){
    return string.match(/(?:[\p{L}0-9][\p{L}'0-9-]*[\p{L}0-9])|\p{L}/giu)
}