import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LoginSchema = new Schema({

    email: {
        type: String,
        required: 'Enter a email'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    workday_id: {
        type: String,
        required: 'Enter Workday ID'
    },
    session: {
        type: String,
        required: 'Enter a session'
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