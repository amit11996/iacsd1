const express = require ('express');
const app =express();

const port=3000;

app.get('/', (req,res)=>{

    res.sendFile(path.join(__dirname,"./D:\roblox1\index1.html"))
});
app.listen(port);
