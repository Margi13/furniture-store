const mongoose = require('mongoose');


const furnitureSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    description: String,
    price: Number,
    img: String,
    material: String,
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});


const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;