const res = require('express/lib/response');

const login = require('./routs/login.js')
const express= require('express');
const app = express();
const PORT = 8080;


app.use(express.json())

app.listen(
    PORT,
    ()=> console.log("its alive on http://localhost:${PORT}")
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt:'nike',
        size:'large'
    })
})

app.post('/tshirt/:id', (req, res) => {

    const {id} = req.params;
    const {logo}= req.body;
    res.status(200).send({
        identification:id
    })
}     )


app.use("/login", login)