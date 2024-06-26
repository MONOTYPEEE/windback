import express, { Router } from "express";
import { getActivity, getEmoji, getMessage } from "../controller/statistic";

const statisticRouter:Router = express.Router()

statisticRouter.get('/activity/:id', getActivity)
statisticRouter.get('/message/:id', getMessage)
statisticRouter.get('/emoji/:id', getEmoji)

export default statisticRouter