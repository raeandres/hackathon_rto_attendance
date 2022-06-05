import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first Name'

    },
    lastName: {
        type: String,
        required: 'Enter a last Name'
    },
    email: {
        type: String,
        required: 'Enter a email'
    },
    project: {
        type: String,
        required: 'Enter Project'
    },
    workday_id: {
        type: String,
        required: 'Enter Workday ID'
    },
    login: {
        type: ObjectId,
        ref: 'Login'
    },
    attendance: {
        type: ObjectId,
        ref: 'Attendance'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});