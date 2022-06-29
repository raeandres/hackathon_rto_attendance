import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AttendanceSchema = new Schema({
    in_office_shedule_type: {
        type: String,
        required: 'Enter In Office Shedule Type (e.g. 3x a week, 1 week in office, 2 weeks in office)'
    },
    office_schedule: {
        type: [String],
        required: 'office_schedule is required'
    },
    wfh_schedule: {
        type: [String],
        required: 'wfh_schedule is required'
    },
    leaves: {
        type: ObjectId,
        ref: 'Leave'
    },
    employee_id: {
        type: ObjectId,
        ref: 'Employee'
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




