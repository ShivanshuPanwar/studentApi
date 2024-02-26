const db = require('../db');

module.exports.getAllStudents = async () => {
    const [records] =  await db.query("SELECT * FROM students");
    return records;
;
}

module.exports.getStudentById = async (id) => {
    const [[record]] =  await db.query("SELECT * FROM students WHERE id = ?", [id]);          
    return record;
};


module.exports.deleteStudent = async (id) => {
    const [{affectedRows}] =  await db.query("DELETE FROM students WHERE id = ?", [id]);
    return affectedRows;
};


module.exports.postStudent = async(obj, id=0) => {
    const [{affectedRows}] =  await db.query(`INSERT INTO students SET ?`, obj);
    if(id === 0) {
        return `A new student with ID: ${affectedRows} has been created`;
    } else {
        return 'The data for the student with ID: '+id+' has been updated';
    }
    
};


module.exports.putStudent = async(obj, id=0) => {
    const [{affectedRows}] = await db.query(`UPDATE students SET ? WHERE id=?`,[obj, id]);
    return affectedRows;
};
