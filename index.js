const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


console.log(year + "-" + month + "-" + date);
const time = year + "-" + month + "-" + date
fs.writeFile('date-time.txt',`${time}`,(err) => {
    if(err) throw err
    console.log('File is created here😀')

})
app.get('/',function(req,res){
    res.json(time)
})

app.listen(8010)