import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    workday_id: {
        type: String
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