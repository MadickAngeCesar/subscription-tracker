import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUsers, getUserById } from "../controllers/user.controller.js";

const userRouter = Router();

// GET /users -> Get all users
userRouter.get('/', getUsers);

// GET /users/:id -> Get user by ID
userRouter.get('/:id', authorize, getUserById);

// POST /users -> Create a new user
userRouter.post('/', (req, res) => res.send('Create user'));

// PUT /users/:id -> Update user by ID
userRouter.put('/:id', (req, res) => res.send('Update user by ID'));

// DELETE /users/:id -> Delete user by ID
userRouter.delete('/:id', (req, res) => res.send('Delete user by ID'));

export default userRouter;