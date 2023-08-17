// // users.routes.js
// import express from 'express';
// import usersService from './users.services.js';





// const router = express.Router();

// router.post('/register', usersService.register);





// export default router;


import express from "express";
import userController from "../users.controler.js"

const router = express.Router();

router.get("/", userController.getAllUsers)

router.get("/:id", userController.getUser)

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser)

export default router 