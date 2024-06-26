import express, { Router } from "express";
import { getActivity, getMessage } from "../controller/statistic";

const statisticRouter:Router = express.Router()

statisticRouter.get('/activity/:id', getActivity)
statisticRouter.get('/message/:id', getMessage)

export default statisticRouter