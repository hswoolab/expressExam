const express = require("express");
const app = express();
const router = express.Router();
const port = 8080;

app.get("/",(req,res)=>{
  res.status(200.).send("Hello Node !");  
});

// 전체 연락처 가져오기 / 생성하기
router.route("/contacts")
  .get((req,res)=>{
    res.status(200).send("Contact Page");
  })
  .post((req,res)=>{
    res.status(201).send("Create Contacts");
  });

// 개별 연락처 가져오기, 수정하기, 삭제하기
router 
  .route("/contacts/:id")
  .get((req,res)=>{
    res.status(200).send(`View Contact for ID : ${req.param.id}`);
  })
  .put((req,res)=>{
    res.status(200).send(`Update Contact for ID : ${req.param.id}`);
  })
  .delete((req,res)=>{
    res.status(200).send(`Delete Contact for ID : ${req.param.id}`);
  });

  app.use(router);

  app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행중`);
  });


