// const fetch = (...args) =>
// 	import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express");
const app = express();
const https = require('https');
const url = "https://jsonplaceholder.typicode.com/users/"

let userInfo = [] 
// fetch(url).then(function (response){
  
//   return response.json();
// }).then(function (obj){
//   userInfo = obj
//   console.log(userInfo);
  
// }).catch(function (error){
//   console.error('Something went wrong retriving the users!')
//   console.error(error);
// });

console.log(userInfo);









app.listen(5020, function(){
    console.log('server running on port 3000');
});