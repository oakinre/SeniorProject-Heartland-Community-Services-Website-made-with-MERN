const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    itemType: {
        type: String,
        required: true,
    },
    exprDate: {
        type: Date,
        
    },
    estimatedPalettes: {
        type: Number,
        
    },
    generalDesc: {
        type: String,
        required: true,
    },
    nameOfOrg: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    }
});

const Product = mongoose.model("ProductData", ProductSchema)
module.exports = Product;