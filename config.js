const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rog883**#',
  database: 'nodemysql',
})

conn.connect((err) => {
  if (err) {
    console.warn(err);
  } else {
    console.warn('Conectou ao MySQL!')
  }
})  

// conn.query("select * from books",(err,result)=>{
//   if(err)
//   {
//     console.warn("some error")
//   }
//   else{
//     console.warn('result', result)
//   }
// })

  // app.listen(5500)
  // })

  module.exports = conn