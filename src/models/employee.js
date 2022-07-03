import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    workday_id: {
        type: String
    },
    email: {
        type: String,
        required: 'SSO from employee is required'
    },
    uuid: {
        type: String,
        required: 'uuid from device is required'
    },
    check_ins: {
        type: [ObjectId],
        ref: 'Checkin'
    },
    schedule: {
        type: ObjectId,
        ref: 'Schedule'
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

export default mongoose.model('Employee', EmployeeSchema);