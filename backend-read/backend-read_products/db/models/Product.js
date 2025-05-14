import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  currecy: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
