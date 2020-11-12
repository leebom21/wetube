//const express = require('express')  //require는 모듈안에 express를 찾아옴
import express from "express"
const  app = express();

const PORT = 4000;
// ex)
// function handleProfile(req, res) {
//     res.send('your are on my profile')

const handleLisening = () =>  console.log(`Listening on: http://localhost:${PORT}`);  //arrow function

const  handleHome = (req, res) =>  res.send('hello from my cccc ');

const  handleProfile = (req, res) =>   res.send('your are on my profile');  

app.get("/", handleHome) ;  //누군가 main url로 접근할 시 handleHome 함수 호출

app.get("/profile", handleProfile);

app.listen(PORT, handleLisening);  //포트번호


