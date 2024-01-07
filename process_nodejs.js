const fs = require('fs');
const input = process.argv;

if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4])
}else if(input[2 ]=="remove"){
     fs.unlinkSync(input[3]);
}else{
    console.log("invalid result...");
}
console.log(input)

//  nodemon process_nodejs.js remove orange.txt "chandan is my name what
//  is your problem brother how can i help you?"