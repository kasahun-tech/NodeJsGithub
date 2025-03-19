const express = require("express");
const path = require("path");
const app = express();

const port=3000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'publico','home.html'));

})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'publico','about.html'))
})

app.listen(port,()=>console.log(`server running on http://localhost:${port}`))