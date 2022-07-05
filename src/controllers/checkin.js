import CheckIn from '../models/checkin';
import { ERROR_CODE, SUCCESS_CODE } from '../common';
import { upsertEmployee } from './employee';
import moment from 'moment';

export const checkIn = async (request, response) => {
    const login = new CheckIn(request.body);
    const { coords } = request.body; //User Location Coordinate
    const { email, uuid } = login;
    let employee;

    try {
        employee = await upsertEmployee(email, uuid)
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            console.log(`Device sharing detected`)
            response.status(401).send({
                code: ERROR_CODE.INVALID_UUID,
            });
            return;
        }
    }
    
    console.log('Employee fetched', employee)
    if (employee) {
        CheckIn.findOne({ email, created_date: {
                $gte: moment().startOf('day').toDate(), 
                $lt: moment().endOf('day').toDate()
        } }, (err, result) => {
            console.log(`CheckIn FindOne - result: ${result} error: ${err}`)
            if (err) {
                response.send(err);
            } else {
                if (result) {
                    console.log(`Already checked in for today`)
                    response.status(200).send({
                        code: SUCCESS_CODE.LOGIN_SUCCESSFUL,
                    });
                    return;
                }
    
                console.log(`Creating checkin for today`)
                if (employee.uuid === uuid) {
                    login.save(function (err) {
                        if (err) {
                            console.log(`Failed to checkin ${err}`)
                            response.send(err);
                        } else {
                            console.log(`Successful checkin`)
                            response.status(200).send({
                                code: SUCCESS_CODE.LOGIN_SUCCESSFUL,
                            });
                        }
                    });
                } else {
                    response.status(401).send({
                        code: ERROR_CODE.INVALID_UUID,
                    });
                }
            }
        });
    }
};
