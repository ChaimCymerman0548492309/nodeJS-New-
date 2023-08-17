// import express from 'express';
// import userRouter from './users.routes.js';

// const app = express();

// app.use(express.json());

// const port = 8080;

// app.use('/', userRouter);

// app.listen(port, () => {
//     console.log(`Server is up and running on port: ${port}`);
// });



import express from "express";
import usersRoute from './user.repostory.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRoute)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


