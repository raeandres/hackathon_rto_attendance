import { employeeLogin } from '../controllers/loginController';


const routes = (app) => {

    const testCredential = {
        email: "testEmail@mfcgd.com",
        password: "testPassword"
    };

    app.route('/login')
        .post(employeeLogin);
        // .post((req, res,next) => {
        //     if(req.body.email == testCredential.email && req.body.password == testCredential.password) {
        //         req.session.user = req.body.email;
        //         res.redirect('/attendance');
        //     } else {
        //         res.send("Invalid credentials");
        //     }
        // }
        // ,(req, res) => {
        //     res.send('POST request from Login Endpoint!');
        // }
        // );

    app.route('/employee')
        .get((req, res) => {
            res.send('GET request from Employee Endpoint!');
        })
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