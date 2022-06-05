import mongoose from "mongoose";
import { EmployeeSchema } from "../models/employeeModel";


const Employee = mongoose.model('Employee', EmployeeSchema);

export const getEmployee = (req, res) => {
    Employee.findOne(req.body.workday_id, (err, employee) => {
        if (err) {
            res.send(err);
        }
        else {
            let response = {
                "status": "success",
                "message": "Request Successful",
                "data": {
                    employee_info: employee
                }
            }
            res.json(response);
        }
    });
}

