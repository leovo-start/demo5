export const Time = (time) =>{
   if(!time) return "";
   let date = new Date(time);
   return date.getFullYear() +
    "-" + (date.getMonth() + 1) +
    "-" + date.getDate() +   
    " " + date.getHours() +
    ":" + date.getMinutes() +
    ":" + date.getSeconds()
}

export default {
   saveUser(user){
    localStorage.setItem("user_key",JSON.stringify(user));   
   }, 
   getUser(){
   return JSON.parse(localStorage.getItem("user_key") || "{}");
   },
   removeUser(){
   localStorage.removeItem("user_key")    
   },
}