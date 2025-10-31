 "use server"
 import fs from "fs/promises"
 
 
 export const submitaction= async (e)=>{

  console.log(e.get("Name"), e.get("add"))
    fs.writeFile("Taha.txt", `Name is ${e.get("Name")} and address is ${e.get("add")}`)

 }