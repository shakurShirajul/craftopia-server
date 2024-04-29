import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    review_date: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

export const Review = mongoose.model("reviews", reviewSchema);