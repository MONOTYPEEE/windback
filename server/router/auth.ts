import express, { Router } from "express";
import { getToken, refreshAccessToken, revokeToken } from "../controller/auth";

const authRouter:Router = express.Router()

authRouter.post('/login', getToken)
authRouter.post('/refresh', refreshAccessToken)
authRouter.post('/revoke', revokeToken)

export default authRouter