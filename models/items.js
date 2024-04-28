import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    item_name: {
        type: String,
        required: true,
    },
    subcategory_name: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    customization: {
        type: String,
        required: true,
    },
    processing_time: {
        type: String,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    userName: {
        type: String,
        // required: true,
    }
})

export const Items = mongoose.model("craftItems", itemSchema);