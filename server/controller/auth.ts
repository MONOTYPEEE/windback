import { config } from "../../database/config"
import { Request, Response } from "express"
import axios from 'redaxios'

export async function getToken(request:Request, response:Response){

    console.log(request?.body)

    if(!request.body){
        return response.status(400).send('code is required')
    }

    axios
        .post(
            `${config.APP_BASEURL}/oauth2/token`,
            new URLSearchParams({
                'client_id': config.APPID,
                'client_secret': config.SECRET,
                'code': request.body.code,
                'grant_type': "authorization_code",
                'redirect_uri': 'http://localhost:5173'
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        .then((d)=>{
            if(d.status === 200){
                console.log(d)

                const expiresAt = new Date(Date.now() + d.data.expires_in)

                return response.status(200).send({
                    access: d.data.access_token,
                    refresh: d.data.refresh_token,
                    expires: expiresAt
                })
            }
        })
        .catch((error)=>{
            return response.status(400).send('error while get token')
        })
}