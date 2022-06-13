import CheckIn from '../models/checkin';
import { ERROR_CODE, SUCCESS_CODE } from '../common';

export const checkIn = (request, response) => {
    const login = new CheckIn(request.body);
    const { coords } = request.body; //User Location Coordinate
    const { email, uuid } = login;

    CheckIn.findOne({ email }, (err, result) => {
        if (err) {
            response.send(err);
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
                    response.send(err);
                } else {
                    response.status(200).send({
                        code: SUCCESS_CODE.LOGIN_SUCCESSFUL,
                    });
                }
            });
        }
    });
};
