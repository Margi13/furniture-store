const mongoose = require('mongoose');


const furnitureSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    description: String,
    price: Number,
    img: String,
    material: String
});


const Furniture = mongoose.model('User', furnitureSchema);

module.exports = Furniture;