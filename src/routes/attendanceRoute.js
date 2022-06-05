import { employeeLogin } from '../controllers/loginController';
import { getEmployee } from '../controllers/employeeController';
import { getLocation } from '../controllers/locationController';


const routes = (app) => {

    app.route('/login')
        .post(employeeLogin);

    app.route('/employee/:email')
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

    app.route('/location')
        .post(getLocation)

}

export default routes;