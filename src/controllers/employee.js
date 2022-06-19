import Employee from '../models/employee';

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

export const upsertEmployee = async (email, workday_id) => {
    let result = await Employee.findOneAndUpdate({email}, {}, { upsert: true})
    return result
}

