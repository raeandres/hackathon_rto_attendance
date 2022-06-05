import { Double } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LocationSchema = new Schema({
    current_location: {
        type: String,
        required: 'Location is required'
    },
    latitude: {
        type: String,
        required: 'Latitude is required'
    },
    longitude: {
        type: String,
        required: 'Longitude is required'
    },
    current_date: {
        type: Date,
        required: 'This date is required'
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    modified_date: {
        type: Date,
        default: Date.now()
    }
});




