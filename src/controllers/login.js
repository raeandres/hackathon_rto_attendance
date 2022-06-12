import { redirect } from "express/lib/response";
import mongoose from "mongoose";
import { LoginSchema } from "../models/login";


const Login = mongoose.model('Login', LoginSchema);

export const employeeLogin = (req, res) => {
    Login.findOne({
        email: req.body.email
    }, (err, login) => {
        if (err) {
            res.send(err);
        }
        else {
            if (login) {
                let response = {
                    "status": "success",
                    "message": "Login Successful",
                    "data": {
                        email: login.email,
                        workday_id: login.workday_id,
                    }
                }
                console.log(login);
                res.send(response);
            }
            else {
                console.log('Invalid credentials');
                res.send('Invalid credentials');
            }
        }
    });

}