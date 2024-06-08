import express, { Router } from "express";
import { getToken } from "../controller/auth";

const authRouter:Router = express.Router()

authRouter.post('/login', getToken)

export default authRouter