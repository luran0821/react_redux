const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');
const bodyparser = require('body-parser');
const redisStore = require('connect-redis')(session);

//建立mongo连接后面跟要创建的数据库(集合connection)
const DB_URL = 'mongodb://localhost:27017/imooc'

const app =  express()




mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

//创建表结构
const User = mongoose.model('users', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))


//创建数据
// User.create({name: 'yang',age: 28
// }, function(err, doc){
//     if(!err) console.log(doc)
//     else console.log(err)

// })


//删除操作
// User.remove({age: 18},function(err, doc){
//     console.log(doc)
// })


//更新操作
// User.update({'name': 'yang'}, {'$set':{age: 18}},function(err, doc){
//     console.log(doc)
// })

//设置服务器跨域权限
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     next();
//   });


// app.get('/',function(req, res){
//     res.send('<h1> test !<h1>')
// })






app.use(bodyparser.json()); // 使用bodyparder中间件，
app.use(bodyparser.urlencoded({ extended: true }));



// 使用 session 中间件
app.use(session({
    name: 'session-name', // 这里是cookie的name，默认是connect.sid
    secret :  'secret', // 对session id 相关的cookie 进行签名  建议使用 128 个字符的随机字符串
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话/*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
    store: new redisStore({
        host: '127.0.0.1',
        port: '6379',
        db: 0,
        pass: '',
    })
}));







app.get('/data', function(req, res){
    User.find({}, function(err, doc){
        return res.json(doc)
    })
    //res.json({name: 'app', type: 'IT'})
})







app.listen(9093, function(){
    console.log('connenting .....!')
})