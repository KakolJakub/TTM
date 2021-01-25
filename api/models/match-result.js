const mongoose = require('mongoose');

const matchResultSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    winner: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('MatchResult', matchResultSchema);
