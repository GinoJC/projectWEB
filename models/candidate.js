//Modelo de datos para cada uno de los candidatos
var mongoose = require('mongoose');

var CandidateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        cantVotes: {
            type: Number,
            required: true,
            trim: true
        }
    }
);

var Candidate = mongoose.model("Candidate", CandidateSchema);
module.exports = Candidate;