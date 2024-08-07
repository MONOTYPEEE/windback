import chalk from "chalk";
import express,{ Express } from "express"
import authRouter from "./router/auth";
import userRouter from "./router/user";
import statisticRouter from "./router/statistic";
import guildRouter from "./router/guild";
import cors from 'cors'

export const app:Express = express()

app.set('port', 3000)

app.listen(app.get('port'), () => {
  console.log(chalk.green(`🌐 WindBack API is ready at port 3000`));
})

app.use(cors({
  credentials: false,
  origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/stat', statisticRouter)
app.use('/guild', guildRouter)