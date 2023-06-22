
const fs = require('fs')

const removeFile = (file)=>{

    fs.unlink(file,(err)=>{
       
        if(err){
        console.log(err)
        }
    })

}

module.exports = {removeFile}
