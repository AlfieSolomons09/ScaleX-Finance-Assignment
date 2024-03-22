import express from 'express';
import { connectDB } from './data/database.js';
import taskRouter from './routes/task.js';
import { errorMiddleware } from './middleware/error.js';
export const app = express()
import cors from 'cors'

connectDB();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.sendStatus(200); // Respond to preflight requests
    } else {
        next();
    }
});

app.use(express.json());
app.use(taskRouter);
app.use(cors())

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(4000, () => {
    console.log("Server is working on port: 4000")
})

// using error middleware
app.use(errorMiddleware);