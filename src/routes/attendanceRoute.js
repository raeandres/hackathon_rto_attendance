import { employeeLogin } from '../controllers/loginController';
import { getEmployee } from '../controllers/employeeController';


const routes = (app) => {

    app.route('/login')
        .post((req, res) => {
            employeeLogin(req, res);
        });

    app.route('/employee/:workday_id')
        .get(getEmployee)
        .post((req, res) => {
            res.send('POST request from Employee Endpoint!');
        });

    app.route('/attendance')
        .get((req, res) => {
            res.send('GET request from Attendance Endpoint!');
        })
        .post((req, res) => {
            res.send('POST request from Attendance Endpoint!');
        });

    app.route('/attendance/:id')
        .get((req, res) => {
            res.send('GET request with ID from Attendance Endpoint!');
        })
        .put((req, res) => {
            res.send('PUT request with ID from Attendance Endpoint!');
        })

}

export default routes;