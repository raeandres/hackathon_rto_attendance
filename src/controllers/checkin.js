import CheckIn from '../models/checkin';
import { ERROR_CODE, SUCCESS_CODE } from '../common';
import { upsertEmployee } from './employee';
import moment from 'moment';

export const checkIn = async (request, response) => {
    const login = new CheckIn(request.body);
    const { coords } = request.body; //User Location Coordinate
    const { email, uuid } = login;
    
    if (upsertEmployee(email)) {
        CheckIn.findOne({ 
            email, 
            created_date: {
                $gte: moment().startOf('day').toDate(), 
                $lt: moment().endOf('day').toDate()
        } }, (err, result) => {
            console.log(`CheckIn FindOne - result: ${result} error: ${err}`)
            if (err) {
                response.send(err);
            } else {
                if (result) {
                    console.log(`Check in found`)
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
    
                console.log(`Create checkin`)
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
    }
};
