import express, { Router } from 'express'
import { getOwnProfile } from '../controller/user'

const userRouter:Router = express.Router()

userRouter.get('/', getOwnProfile)

export default userRouter