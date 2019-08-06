const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    productId: String,
    title: String,
    content: String,
    price : Number,
    discountPrice: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('note', NoteSchema);