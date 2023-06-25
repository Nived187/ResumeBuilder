

const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const {createPDF} = require('./pdf')

app.listen(PORT,console.log(`listening on port ${PORT}`))
app.use(express.json())
app.use(express.static('./ui'))
app.use(bodyParser.urlencoded({extended:false}))






app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'/ui/ui.html'))
})

app.post('/create',(req,res)=>{
    
    const data = req.body
    
    try {
         createPDF(data)
    } catch (error) {
        
    }

    res.send(req.body)

})