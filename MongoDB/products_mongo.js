import mongoose from "mongoose";

export default mongoose.model ('products', new mongoose.Schema({
    name: {type: String, required: true },
    brand: {type: String, required: true },
    category: {type: String, required: true, enum: ['gpu', 'cpu', 'ram', 'motherboard', 'cooling', 'case', 'psu', 'peripherals', 'storage']},
    description: {type: String},
    price: {type: Number, required: true},
    stock: {type: Number, default: 0}
}));
