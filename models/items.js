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
    short_descriptiondragon: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    customization: {
        type: String,
        required: true,
    },
    processing_time: {
        type: String,
        required: true,
    }
})

export const Items = mongoose.model("craftItems", itemSchema);