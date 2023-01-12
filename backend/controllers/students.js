const router = require("../routes/students")
const mongoose = require("mongoose")
const student = require("../models/studentdata")

const crypto = require("crypto");
var rank = 1;

const getStudents = async (req, res) => {
    try {
        const studentlist = await student.find({});
        res.status(200).json(studentlist);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const getspecStudents = async (req, res) => {
    const roll = req.params.roll;

    try {
        const stud = await student.findOne({ roll: roll });
        res.status(200).json(stud);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createStudents = async (req, res) => {
    const referralid = req.body.referralid;


    var id = crypto.randomBytes(10).toString('hex');

    const newstudent = new student({
        name: req.body.name,
        roll: req.body.roll,
        registration: req.body.registration,
        subjects: req.body.subjects,
        created_on: req.body.created_on,
        referral : id,
        // rank:rank,
    })
    try {
        await newstudent.save();
        rank+=1
        res.status(201).json(newstudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateStudent = async (req, res) => {
    console.log(req.body);
    const roll = req.params.roll;

    try {
        const stud = await student.updateOne({ roll: roll },
            {
                name: req.body.name,
                roll: req.body.roll,
                registration: req.body.registration,
                created_on: req.body.created_on,
                subjects: req.body.subjects,
            });  
              
        res.status(200).json(stud);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const deleteStudent = async (req, res) => {
    console.log(req.body);
    const roll = req.params.roll;

    try {
        const stud = await student.deleteOne({ roll: roll })
        res.status(200).json(stud);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const incRank = async (req, res)=>{
    const ref = req.params.referral;
    try {
        const stud = await student
        // .updateOne({referral: ref }, {rank : rank-1})
        // .updateOne({rank:rank-1},{rank:rank+1})
        
        res.status(200).json(stud);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = {
    getStudents,
    getspecStudents,
    deleteStudent,
    updateStudent,
    createStudents,
    incRank
}