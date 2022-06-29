import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        require: 'First name is required'
    },
    last_name: {
        type: String,
        require: 'Last name is required'
    },
    email: {
        type: String,
        required: true
    },
    workday_id: {
        type: String,
        required: true
    },
    check_ins: {
        type: [ObjectId],
        ref: 'Checkin'
    },
    attendance: {
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

export default mongoose.model('Employee', EmployeeSchema);