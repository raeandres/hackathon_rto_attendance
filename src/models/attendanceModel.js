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
    in_office: {
        type: [Date],
        required: 'in-office dates are required'
    },
    on_leave: {
        type: [Date],
        required: 'Leave dates are required'
    },
    current_location: {
        type: String,
        required: 'Current location is required'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});




