import Login from '../models/login';
import { ERROR_CODE, SUCCESS_CODE } from '../common';

export const loginEmployee = (request, response) => {
    const login = new Login(request.body);
    const { email, uuid } = login;

    Login.findOne({ email }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result) {
                if (result.uuid === uuid) {
                    response.status(200).send({
                        code: SUCCESS_CODE.LOGIN_SUCCESSFUL,
                    });
                    return;
                }

                response.status(401).send({
                    code: ERROR_CODE.INVALID_UUID,
                });
                return;
            }

            login.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    response.status(200).send({
                        code: SUCCESS_CODE.LOGIN_SUCCESSFUL,
                    });
                }
            });
        }
    });
};
