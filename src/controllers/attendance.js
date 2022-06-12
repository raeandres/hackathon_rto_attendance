import mongoose from "mongoose";
import { AttendanceSchema, EmployeeSchema, LocationSchema } from "../models";


const Employee = mongoose.model('Employee', EmployeeSchema);
const Attendance = mongoose.model('Attendance', AttendanceSchema);
const Location = mongoose.model('Location', LocationSchema);

export const enterAttendance = (req, res) => {
    // let employee = new Employee();
    // employee.employee_id = req.body.employee_id;
    // employee.employee_name = req.body.employee_name;
    // employee.employee_designation = req.body.employee_designation;
    // employee.employee_department = req.body.employee_department;
    // employee.employee_email = req.body.employee_email;
    // employee.employee_password = req.body.employee_password;
    // employee.employee_mobile = req.body.employee_mobile;
    // employee.employee_address = req.body.employee_address;
    // employee.employee_joining_date = req.body.employee_joining_date;
    // employee.employee_leaving_date = req.body.employee_leaving_date;
    // employee.employee_status = req.body.employee_status;
    // employee.created_date = new Date();
    // employee.modified_date = new Date();
    // employee.save((err, employee) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     else {
    //         res.send(employee);
    //     }
    // });
}; 
