
import express from 'express'
import bodyParser from 'body-parser'
import sqlite3 from 'sqlite3'
import cors from 'cors'
sqlite3.verbose();


const app = express();
const port = 3003;
app.use(bodyParser.json());
app.use(cors());



// Open the SQLite database
const db = new sqlite3.Database('../mydatabase.db' );


//for signing up a member 
app.post('/users', (req, res) => {
    const member = req.body;
    const sql = `INSERT INTO users ( password, email, first_name, last_name, goal, age, weight, height)
                 VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.run(sql, [ member.password, member.email, member.first_name, member.last_name, member.goal, member.age, member.weight, member.height], function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ message: 'Student added successfully', studentId: this.lastID });
    });
  });


  //look whether some user is exit

//   app.post('/login',(req,res)=>{
//     const{email,password}=req.body;
//     const query='SELECT * FROM users WHERE email = ? AND password = ?';
//     db.get(query,[email,password],(err,row)=>{
//         if(err){
//             return res.status(500).json({ error: err.message });
//         }
//         if(row){
//             res.json({success:true});
//         }else{
//             res.json({ success: false, message: 'Invalid username or password' });
//         }
//     });
// });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });