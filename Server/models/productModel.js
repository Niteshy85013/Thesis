const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
      required: true,
    },
    crossPlatform: {
      type: Boolean,
      default: false,
      required: true,
    },
    nativePlatform: {
      type: Boolean,
      default: false,
      required: true,
    },
    accessoriesAvailable: {
      type: Boolean,
      default: false,
      required: true,
    },
    negotiable: {
      type: Boolean,
      default: false,
      required: true,
    },
    projectsupportAvailable: {
      type: Boolean,
      default: false,
    },

    showBidsOnProductPage: {
      type: Boolean,
      default: false,
    },

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // Ensure that it matches the model name of the User model
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
