import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel";

const Login = mongoose.model('LoginSchema', LoginSchema);

export const employeeLogin = (req, res) => {
    Login.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, login) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log(login);
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