import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CheckInSchema = new Schema({
    employee_id: {
        type: ObjectId,
        ref: 'Employee'
    },
    email: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    location: {
        type: ObjectId,
        ref: 'Location'
    },
    created_date: {
        type: Date,
        default: Date.now(),
    },
    modified_date: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('CheckIn', CheckInSchema);
