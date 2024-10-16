const asyncHandler = require("express-async-handler");


// @desc Get all contacts
// @route GET /contacts

const getAllContacts = asyncHandler(async(req,res)=>{

  res.status(200).send("Contact Page");

});

// @desc Create a contacts
// @route POST /contacts
// {
//   "name" : "HSWOO",
//   "email": "hswoo@cnu.ac.kr",
//   "phone": "01085881353" 
// }
const createContact = asyncHandler(async(req,res)=>{
  console.log("req.body");
  const {name, email, phone} = req.body;

  if(!name | !email | !phone){
    return res.status(400).send("필수값이입력되지 않았습니다");

  }
  res.status(201).send("Create Contacts");
});

// @desc Get contacts 
// @route GET /contacts/:id
const getContact = asyncHandler(async (req,res)=>{
  res.status(200).send(`View Contact for ID : ${req.params.id}`) 
});

// @desc Update contacts 
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req,res)=>{
  res.status(200).send(`Update Contact for ID : ${req.params.id}`)
});

// @desc Delete contacts 
// @route PUT /contacts/:id
const deleteContact = asyncHandler(async (req,res)=>{
  res.status(200).send(`delete Contact for ID : ${req.params.id}`)
});


module.exports = { 
  getAllContacts, 
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
