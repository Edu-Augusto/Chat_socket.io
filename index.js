const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);

io.on('connection', (socket)=>{

    socket.on('disconnect', ()=>{
        console.log(`Usuário ${socket.id} desconectado!`);
    })

    socket.on('mensagem', (data)=>{
        io.emit('resultado', {msg:data.msg, user:data.user});
        console.log(data);
    })
})

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index');
})




http.listen(3000, ()=>{
    console.log('Servidor rodando!');
})