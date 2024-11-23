import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    company: {  
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Company',  // Ensures it matches the Company model name
        required: true,  
    },  
    email: {  
        type: String,  
        required: true  
    },  
    reviews: {  
        type: String,  
        required: true  
    },  
    likes: [{  
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Like'  
    }]  
});

const Review = mongoose.model("Review", reviewSchema);  // Capitalized to match mongoose conventions

export default Review;
