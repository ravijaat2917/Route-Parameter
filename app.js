import  express  from "express";
const app = express();
const port = process.env.port || '3000';

app.get('/product/:category' , (req , res)=>{
    res.send(`product category is : ${req.params.category}`)
});

app.get('/sale/:year/and/:month' ,(req,res)=>{
    const {year , month} = req.params ;
    let data = req.params ; // { year: '2022', month: '09' } Store in this manner.
    res.send(data);
})

app.get('/train/:from-:to' , (req , res)=>{
    console.log(req.params);
    const {from , to } = req.params;
    res.send(`Travelling from ${from} to ${to}.`);
})

app.get('/location/:state.:city',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

// Regex parameters example
app.get('/student/delete/:id([0-9]{2})' , (req,res)=>{ // with this it can only takes number from 0 to 9 and two digit number only.
    res.send(`Student Deleted with id:${req.params.id}`);
});

app.get('/:type(post|article)/:id' , (req,res)=>{  // it will works only for post and article path request query.
    console.log(req.params);
    res.send(req.params);
})

// app.param()
app.param('id',(req,res,next ,id)=>{ // this is called only once. // also set as an array ex. ['id','page']
    console.log(`Id is ${id}`);
    next();
})
app.get('/user/:id' , (req ,res)=>{
    console.log("This is user id path");
    res.send('response OK');
})

// Querry String
app.get('/product' , (req , res)=>{
    console.log(req.query);
    res.send(req.query);
    // product?name=Ravi&Age=23 returns { name: 'Ravi', Age: '23' }
})

app.listen(port,()=>{
    console.log(`Server Listening at http://localhost:${port}`);
});