//Modelo de datos para cada uno de los candidatos
var mongoose = require('mongoose');

var CandidateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true,
            trim: true
        },
        team: {
            type: String,
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