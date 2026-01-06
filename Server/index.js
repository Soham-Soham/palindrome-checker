import express from "express";
import { config } from "dotenv";
import cors from 'cors';
import checkPalindromeRouter from './routes/palindrome.route.js';

config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/api/v1/palindrome",checkPalindromeRouter)

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT: ${PORT}`);
})