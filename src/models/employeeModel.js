import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        required: 'Enter a first Name'

    },
    last_name: {
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
    login_id: {
        type: ObjectId,
        ref: 'Login'
    },
    attendance_id: {
        type: ObjectId,
        ref: 'Attendance'
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