const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const port = 4000;



app.get('/', (req, res) => {
  res.send('Wellcome')
});

app.get('/about', (req, res) => {
  res.send('<h1>Wellcome in about</h1>')

});

app.get('/contact', (req, res) => {
  res.send('Wellcome in contact')
});

app.get('/cal', (req, res) => {
  // res.send('Wellcome in contact')
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/cal", (req, res) => {
  // res.send("Thankyou")
  console.log(req.body);
  let n1 = Number(req.body.v1);
  let n2 = Number(req.body.v2);

  let sum = n1+n2
  res.send("the sum number is " + sum);

});

app.get('/bmi',(req,res)=>{
  res.sendFile(__dirname + "/bmi.html")
});

app.post("/bmi",(req,res)=>{
  console.log(req.body);
  let w1 = Number(req.body.weight);
  let h1 = Number(req.body.height);

  let bmi = w1/(h1*h1)
  res.send("the sum number is " + bmi);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

});