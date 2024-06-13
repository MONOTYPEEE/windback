export default function tokenSplit(authorization:string){
    const [type, token] = authorization.split(' ')
    return {type, token}
}