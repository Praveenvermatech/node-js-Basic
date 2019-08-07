const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    productId: String,
    title: String,
    content: String,
    price : Number,
    discountPrice: Number,
    capacity: String
}, {
    timestamps: true
});

module.exports = mongoose.model('note', NoteSchema);