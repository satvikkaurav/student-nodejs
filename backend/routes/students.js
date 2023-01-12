const express = require("express");

const student_Act = require("../controllers/students");
const router = express.Router();

router.get('/',student_Act.getStudents);
router.get('/:roll',student_Act.getspecStudents);
router.post('/',student_Act.createStudents);
router.patch('/:roll',student_Act.updateStudent);
router.delete('/:roll',student_Act.deleteStudent);

module.exports = router;

//'/:roll -> method for parameter passing (when we need to obtain the data for a specific student, update or delete a specific students data)
//for www.abc.com/student/23
//URL -> app.get('/path/:id)