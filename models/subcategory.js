import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
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
    }
})

export const Subcategory = mongoose.model("subcategories", subcategorySchema);