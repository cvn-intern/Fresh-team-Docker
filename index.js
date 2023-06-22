const express = require('express')
const app = express()
const port = 3000
const knexObj = require("knex");

const knex = knexObj({
    client:"mysql2",
    connection:{
        host: "mysql",
        port:3306,
        user:"root",
        password:"Abc@1234",
        database:"test",
    },
    pool:{min:0, max:10}
})

const test = async () =>{
    const sql = "SELECT * from Student";
    const abc = await knex.raw(sql)

    return abc[0]
}
app.get('/',(req,res)=>{
    // test().then(response => res.send(response.map((item) =>{
    //     return `<p>Hello1234 : ${item.name}</p> </br>`
    // }).join("")))
    res.send("fdfggffgdfgddfgfdfg3")
})

app.listen(port,()=>{
    console.log(`Example app listening222 on ${port}`)
})



