import { Request, Response } from "express";
import guildRepository from "../../database/repository/guildRepository";
import axios from 'redaxios'
import { config } from "../../database/config";
import tokenSplit from "../../utils/tokenSplit";
import { Guild } from "discord.js";

export function getAvaliableGuild(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('Unauthorized')
    }

    axios
        .get(
            `${config.APP_BASEURL}/users/@me/guilds`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status === 200){
                guildRepository
                    .findGuilds(d.data.map((guild:Guild)=> guild.id))
                    .then(found=>{
                        return response.status(200).send(found)
                    })
            }
        })
        .catch(error=>{
            return response.status(400).send(error.body)
        })
}

export function getGuildInfo(request:Request, response:Response){
    if(!request.headers.authorization){
        return response.status(401).send('Unauthorized')
    }

    axios
        .get(
            `${config.APP_BASEURL}/users/@me/guilds`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenSplit(request.headers.authorization).token}`
                }
            }
        )
        .then(d=>{
            if(d.status===200){
                const filtered = d.data.find((guild:Guild)=> guild.id === request.params.id)

                if(!filtered){
                    return response.status(404).send('cannot find server')
                }
                else{
                    response.set('Cache-control', 'private, max-age=3600')
                    return response.status(200).send({
                        id: filtered.id,
                        icon: `https://cdn.discordapp.com/icons/${filtered.id}/${filtered.icon}.png`,
                        name: filtered.name
                    })
                }
            }
        })
        .catch(error=>{
            return response.status(400).send(error.data)
        })
}