const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Le nom complet est obligatoire"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "L'email est obligatoire"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Le mot de passe est obligatoire"],
      minlength: [6, "Le mot de passe doit contenir au moins 6 caractères"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true } // crée automatiquement createdAt et updatedAt
);

module.exports = mongoose.model("User", userSchema);
