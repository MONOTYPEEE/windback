import configFile from '../config.json' assert {type: 'json'}

export interface configType{
    TOKEN: string
    APPID: string
    DB_URL: string
    APP_BASEURL: string
    SECRET: string
}

export const config:configType = configFile