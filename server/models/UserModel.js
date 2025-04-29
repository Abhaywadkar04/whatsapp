import mongoose from "mongoose";
// import { genSalt, hash } from "bcrypt";
import { genSalt, hash } from "bcryptjs"; // Use bcryptjs for compatibility

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  profileSetup: {
    type: Boolean,
    required: false,
    default: false, // Ensures a default value is set if not provided
  },
});

// Middleware to hash password before saving, but only if the password is modified
userSchema.pre("save", async function (next) {
    // Check if the password field has been modified before hashing
    if (!this.isModified("password")) {
        return next();  // If password is not modified, skip the hashing
    }
    
    // Otherwise, hash the password
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = mongoose.model("User", userSchema);

export default User;
