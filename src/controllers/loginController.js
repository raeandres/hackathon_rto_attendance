import { redirect } from "express/lib/response";
import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel";


const Login = mongoose.model('Login', LoginSchema);

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
                let response = {
                    "status": "success",
                    "message": "Login Successful",
                    "data": {
                        email: login.email
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