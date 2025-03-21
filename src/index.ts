import {Client} from "pg";
import express from "express";

const pgClient= new Client("postgresql://neondb_owner:npg_67ExovasQbmn@ep-shy-term-abqj5rr5-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require")
pgClient.connect();

// async function main(){
//     await pgClient.connect();
//     const response= await pgClient.query("SELECT * FROM users;")
//     console.log(response.rows)
// }

// main();

const app = express();
app.use(express.json());


app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const insertquery= `INSERT INTO users (username,email,password) VALUES ('${username}','${password}','${email}');`
    const responce = await pgClient.query(insertquery);

    res.json({
        message: "you have signed up "
    })

})

app.listen(3000)