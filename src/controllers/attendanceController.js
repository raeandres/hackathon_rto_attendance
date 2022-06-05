import mongoose from "mongoose";
import { Schema } from "../models/attendanceModel";


// const Attendance = mongoose.model('AttendanceSchema', Schema);
// const Login = mongoose.model('LoginSchema', Schema);
// const Employee = mongoose.model('EmployeeSchema', Schema);

// export const employeeLogin = (req, res) => {
//     Login.findOne({
//         email: req.body.email,
//         password: req.body.password
//     }, (err, login) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             if (login) {
//                 console.log(login);
//                 res.send(login);
//             }
//             else {
//                 console.log('Invalid credentials');
//                 res.send('Invalid credentials');
//             }
//         }
//     });
// }