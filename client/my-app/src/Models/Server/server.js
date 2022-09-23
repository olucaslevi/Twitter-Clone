// Database
connection
    .authenticate()
    .then(()=>{
        console.log('Comunicando com o banco de dados com sucesso !')
}).catch((err)=>{
    console.log("Erro encontrado: ", err);
})

app.listen(8080, ()=>{
    console.log("O servidor está rodando sem problemas.")
})