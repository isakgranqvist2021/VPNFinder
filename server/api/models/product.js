const mongoose = require("mongoose");

module.exports = mongoose.model("Product", new mongoose.Schema({
    label: { 
        type: String,
        required: true 
    },
    description: { 
        type: String,
        required: true
    },
    imageURL: { 
        type: String,
        required: true 
    },
    link: { 
        type: String,
        required: true 
    },
    freeOption: {
        type: Boolean,
        required: true
    },
    onSaleData: {
        onSale: {
            type: Boolean,
            default: false
        },
        discount: {
            type: Number,
            default: 0
        }
    },
    features: { 
        type: Array,
        required: true  
    }
}));