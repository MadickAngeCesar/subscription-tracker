import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minLength: [3, "User name must be at least 3 characters long"],
    maxLength: [30, "User name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
    trim: true,
    lowercase: true,
    minLength: [5, "Email must be at least 5 characters long"],
    maxLength: [255, "Email cannot exceed 255 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password must be at least 6 characters long"],
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
