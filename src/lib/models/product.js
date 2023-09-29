import mongoose from 'mongoose'


const productModel = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

export const Product = mongoose.models.form_data || mongoose.model("form_data", productModel)
