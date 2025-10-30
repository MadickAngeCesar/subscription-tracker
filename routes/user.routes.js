import { Router } from "express";

const userRouter = Router();

// GET /users -> Get all users
userRouter.get('/', (req, res) => {
  res.send('Get all users');
});

// GET /users/:id -> Get user by ID
userRouter.get('/:id', (req, res) => res.send('Get user by ID'));

// POST /users -> Create a new user
userRouter.post('/', (req, res) => res.send('Create user'));

// PUT /users/:id -> Update user by ID
userRouter.put('/:id', (req, res) => res.send('Update user by ID'));

// DELETE /users/:id -> Delete user by ID
userRouter.delete('/:id', (req, res) => res.send('Delete user by ID'));

export default userRouter;