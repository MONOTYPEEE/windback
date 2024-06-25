import express, { Router } from "express";
import { getActivity } from "../controller/statistic";

const statisticRouter:Router = express.Router()

statisticRouter.get('/activity/:id', getActivity)

export default statisticRouter