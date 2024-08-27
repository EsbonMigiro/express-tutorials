const express = require("express")

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')



app.get('/', (req, res)=>{
    // res.send("code with Mic")
    console.log("request served")

    // res.status(500).json({message: "Michael Coding"})
    // res.download("server.js")
    // res.json({message: "CodeM"})
    res.render("index", {texte: "CodeEs"})
})
const userRouter = require('./routes/user.js')
app.use('/users', userRouter)

app.listen(5000)