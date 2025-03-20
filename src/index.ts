import {Client} from "pg";

const pgClient= new Client("postgresql://neondb_owner:npg_67ExovasQbmn@ep-shy-term-abqj5rr5-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require")

async function main(){
    await pgClient.connect();
    const response= await pgClient.query("SELECT * FROM users;")
    console.log(response.rows)
}

main();