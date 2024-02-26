const express = require('express');
router = express.Router();

const service = require('../services/student.service');


router.get('/', async (req, res) => {
    const students = await service.getAllStudents();
    res.send(students);
});

router.get('/:id', async (req, res) => {
    const student = await service.getStudentById(req.params.id);
   if(student == undefined)
       res.status(404).json('no record with given id : ' + req.params.id);
    else 
       res.send(student);
});


router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteStudent(req.params.id);
    if(affectedRows == 0)
       res.status(404).json('no record with given id : ' + req.params.id);
    else 
       res.send('deleted successfully.');
});


router.post('/', async (req, res) => {
    await service.postStudent(req.body, req.params.id);
    res.status(201).send('created successfully.');
});


router.put('/:id', async (req, res) => {
    const affectedRows = await service.putStudent(req.body, req.params.id);
    if(affectedRows == 0) {
        res.status(404).json('no record with given id : ' + req.params.id);
    }
    else 
        res.send('updated successfully');  
});



module.exports = router;