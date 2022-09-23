const express = require('express');
const app = express();
const connection = require('./Database/database');
const cors = require('cors');

const userController = require('./Components/users/userController');

// Database
/// db authentication
connection
    .authenticate()
    .then(()=>{
        console.log('Comunicando com o banco de dados com sucesso !')
}).catch((err)=>{
    console.log("Erro encontrado: ", err);
})


app.use(cors());
app.use(express.json()); // * Para que o express entenda o formato json


app.set('port', process.env.PORT || 9090);


// conjuntos de rotas
app.use("/", userController);


app.get('/',(req,res)=>{
    res.send('Hello World !');
})

app.post('/teste',(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    console.log(req.body);

})

// starting server
app.listen(9090,()=>{
    console.log("Server online on port:9090!!!")
})

