import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel";
import { EmployeeSchema } from "../models/employeeModel";
import { AttendanceSchema } from "../models/attendanceModel";
import { LocationSchema } from "../models/locationModel";
import { ObjectId } from "mongodb";


const Login = mongoose.model('Login', LoginSchema);
const Employee = mongoose.model('Employee', EmployeeSchema);
const Attendance = mongoose.model('Attendance', AttendanceSchema);
const Location = mongoose.model('Location', LocationSchema);

export const employeeLogin = (req, res) => {
    Login.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, login) => {
        if (err) {
            res.send(err);
        }
        else {
            if (login) {
                console.log(login);
                res.send(login);
            }
            else {
                console.log('Invalid credentials');
                res.send('Invalid credentials');
            }
        }
    });
}