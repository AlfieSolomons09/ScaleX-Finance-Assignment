import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    price: {
        m5: {
            type: String,
            required: true,
        },
        h1: {
            type: String,
            required: true,
        },
        h6: {
            type: String,
            required: true,
        },
        h24: {
            type: String,
            required: true,
        }
    },
    volume: {
        h24: {
            type: String,
            required: true,
        },
        h6: {
            type: String,
            required: true,
        },
        h1: {
            type: String,
            required: true,
        },
        m5: {
            type: String,
            required: true,
        },
    }
})

export const DataModel = mongoose.model("DataModel", schema)