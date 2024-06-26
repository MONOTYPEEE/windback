import { Request, Response } from "express"
import axios from 'redaxios'
import { config } from "../../database/config"
import tokenSplit from "../../utils/tokenSplit"
import messageRepository from "../../database/repository/messageRepository"
import emojiRepository from "../../database/repository/emojiRepository"

export async function getActivity(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('Unauthorized')
    }

    axios
        .get(
            `${config.APP_BASEURL}/users/@me`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status === 200){
                messageRepository
                    .getActivityArray(d.data.id, request.params.id)
                    .then(found=>{
                        response.set('Cache-control', 'private, max-age=21600')
                        return response.status(200).send(found?.activity)
                    })
            }
        })
        .catch(error=>{
            return response.status(400).send(error.body)
        })
}

export async function getMessage(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('Unauthorized')
    }

    axios
        .get(
            `${config.APP_BASEURL}/users/@me`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status === 200){
                messageRepository
                    .getActivityArray(d.data.id, request.params.id)
                    .then(found=>{
                        response.set('Cache-control', 'private, max-age=21600')
                        return response.status(200).send({
                            media: found?.media ?? 0,
                            URL: found?.URL ?? 0,
                            count: found?.activity?.daily.reduce((p,c)=> p+c)
                        })
                    })
            }
        })
        .catch(error=>{
            return response.status(400).send(error.body)
        })
}

export async function getEmoji(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('Unauthorized')
    }
    axios
        .get(
            `${config.APP_BASEURL}/users/@me`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status === 200){
                emojiRepository
                    .getEmoji(d.data.id, request.params.id)
                    .then(found=>{
                        let sorted = Object.entries(found?.emoji)
                        sorted.sort((a,b)=>b[1]-a[1])
                        sorted.slice(0, 3)

                        axios
                            .get(
                                `${config.APP_BASEURL}/guilds/${request.params.id}/emojis`,
                                {
                                    headers: {
                                        'Authorization': `Bot ${config.TOKEN}`
                                    }
                                }
                            )
                            .then(d=>{
                                sorted = sorted.slice(0,3).map(([k,v])=>{
                                    const currentEmojiData = d.data.find((emoji)=> emoji.id === k)
                                    return [
                                        k,
                                        v,
                                        currentEmojiData?.name
                                    ]
                                })

                                return response.send(sorted)
                            })
                            .catch(error=>{
                                console.log(error)
                            })

                    })
            }
        })
}