const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Le titre du produit est obligatoire"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "La description est obligatoire"],
        },
        price: {
            type: Number,
            required: [true, "Le prix est obligatoire"],
            min: [0, "Le prix doit être supérieur ou égal à 0"],
        },
        stock: {
            type: Number,
            required: [true, "Le stock est obligatoire"],
            min: [0, "Le stock doit être supérieur ou égal à 0"],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "La catégorie est obligatoire"],
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },

        imageUrl: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
