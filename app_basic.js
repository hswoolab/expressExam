const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Node!");  
  
});

//연락처 전체리스트
app.get("/contacts",(req,res)=>{

  res.status(200).send("Contacts Page");

})

//연락처 추가
app.post("/contacts",(req,res)=>{
  res.status(201).send("Create Contacts");
})

//연락처 by ID 
app.get("/contacts/:id",(req,res)=>{
  res.status(200).send(`View Contact for ID : ${req.params.id}`);
    
});

//연락처 수정 by ID
app.put("/contacts/:id", (req,res)=>{
  res.status(200).send(`Update Contact for ID : ${req.params.id}`);
})

//연락처 삭제 by ID

app.delete("/contacts/:id", (req,res)=>{
  res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
})

// HTTP 헤더 Echo 
app.get("/header",(req,res)=>{
  const headers = req.headers;
  res.send(headers);
})

// JSON 으로 전송
app.get("/json", (req, res) => {
  res.status(200);
  //res.send("Hello Node!");  
  res.json({message : "Hello Node !"});  
});

// HTML 서비스
app.get("/html/",(req,res)=>{
  res.status(200);
  res.sendFile(__dirname + "/assets/contacts.html");
})

app.listen(port, ()=> {
  
  console.log(`${port} 번 포트에서 서버실행중`) 

});