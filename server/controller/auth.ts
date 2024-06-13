import { config } from '../../database/config'
import { Request, Response } from 'express'
import axios from 'redaxios'

export async function getToken(request:Request, response:Response){
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
                'grant_type': 'authorization_code',
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
                const expiresAt = new Date(Date.now() + d.data.expires_in * 1000)

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

export async function refreshAccessToken(request:Request, response:Response){
    if(!request.body.token){
        return response.status(401).send('token is required')
    }

    axios
        .post(
            `${config.APP_BASEURL}/oauth2/token`,
            new URLSearchParams({
                'client_id': config.APPID,
                'client_secret': config.SECRET,
                'grant_type': 'refresh_token',
                'refresh_token': request.body.token
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${request.body.token}`
                }
            }
        )
        .then((d)=>{
            if(d.status === 200){
                const expiresAt = new Date(Date.now() + d.data.expires_in * 1000)

                return response.status(200).send({
                    access: d.data.access_token,
                    refresh: d.data.refresh_token,
                    expires: expiresAt
                })
            }
        })
        .catch((error)=>{
            return response.status(400).send('error while refresh token')
        })
}

export async function revokeToken(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('You need a Token so you can revoke it')
    }

    axios
        .post(
            `${config.APP_BASEURL}/oauth2/token/revoke`,
            new URLSearchParams({
                'token': request.headers.authorization.split(' ')[1]
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${btoa(config.APPID + ':' + config.SECRET)}`
                },
            }
        )
        .then((d)=>{
            if(d.status === 200){
                return response.status(200).send('Access Revoked')
            }
        })
        .catch((error)=>{
            return response.status(400).send('error while revoke token')
        })
}