const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const dbConnect = require("./config/dbConnect");
const app = express();
const port = 8082;

//
// mongoWOO : hswoo/whs135311 , admin/whs135311
// mongodb+srv://hswoo:DOCuvX0FSDnb84g9@mongowoo.pu1nk.mongodb.net/?retryWrites=true&w=majority&appName=MongoWOO
// mongodb+srv://admin:whs135311@mongowoo.pu1nk.mongodb.net/


app.get("/",(req,res)=>{
  res.status(200.).send("Hello Node !");  
});


dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/contacts", require("./routes/contactRoutes"));
app.use(errorhandler);

app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버 실행중`);
});