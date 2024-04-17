import configFile from '../config.json' assert {type: 'json'}

export interface configType{
    TOKEN: string
    APPID: string
    DB_URL: string
}

export const config:configType = configFile