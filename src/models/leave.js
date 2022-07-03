import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const LeaveSchema = new Schema({
    leave_type: {
        type: String,
        required: 'Enter leave type either Sick leave, or Planned Leave'
    },
    leave_dates: {
        type: [Date],
        required: 'Leave dates are required'
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

export default mongoose.model('Leaves', LeaveSchema);



