import { Request, Response } from "express";
import axios from 'redaxios'
import { config } from "../../database/config";
import tokenSplit from "../../utils/tokenSplit";

export function getOwnProfile(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('token is required')
    }

    axios
        .get(
            `${config.APP_BASEURL}/users/@me`,
            {
                headers:{
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status===200){
                return response.status(200).send(d.data)
            }
        })
        .catch(error=>{
            return response.status(error.code)
        })
}