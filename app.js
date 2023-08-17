import express from 'express';
import userRouter from './users.routes.js';

const app = express();

app.use(express.json());

const port = 8080;

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});