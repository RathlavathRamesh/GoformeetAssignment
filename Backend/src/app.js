import express from "express";
import cors from 'cors'
import userRouter from './Routes/userRoute.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);

export default app;