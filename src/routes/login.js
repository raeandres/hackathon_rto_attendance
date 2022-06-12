import express from 'express';
import { employeeLogin } from "../controllers";

const router = express.Router();

router.route("/").post(employeeLogin);

// router
//   .route("/employee/:workday_id")
//   .get(getEmployee)
//   .post((req, res) => {
//     res.send("POST request from Employee Endpoint!");
//   });

// router
//   .route("/attendance")
//   .get((req, res) => {
//     res.send("GET request from Attendance Endpoint!");
//   })
//   .post((req, res) => {
//     res.send("POST request from Attendance Endpoint!");
//   });

// router
//   .route("/attendance/:id")
//   .get((req, res) => {
//     res.send("GET request with ID from Attendance Endpoint!");
//   })
//   .put((req, res) => {
//     res.send("PUT request with ID from Attendance Endpoint!");
//   });

// router.route("/location").post(getLocation);

export default router;
