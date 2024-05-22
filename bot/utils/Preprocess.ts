import { URLregex } from "./dictionary";

export default function Preprocess(string:string){
    string = string.replace(URLregex, '') //remove URL
        .replace(/<@[0-9]{17,19}>/giu, '') //remove mention

    return string
}