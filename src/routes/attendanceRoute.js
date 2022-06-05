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


 
//  ////////////////////////////////////////////////////////////////////////


    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        },(req,res,next) => {
            res.send('GET request to the homepage')
        })

        .post((req, res) => {
            res.send('POST request to the homepage')
        });

    app.route('/contact/:contactId')
        .get((req, res) => {
            res.send('GET specific item request to the homepage')
        })

        .put((req, res) => {
            res.send('PUT request to the homepage')
        })

        .delete((req, res) => {
            res.send('DELETE request to the homepage')
        });

    
}

export default routes;