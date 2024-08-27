const express = require('express')

const router = express.Router()
router.use(logger)



router.get('/', (req, res)=>{
    // res.send("user Lists")
    res.render("users/new")
})
router.post('/register', (req, res)=>{
    const isValid = true
    if(isValid){
        users.push({name: req.body.username})
        res.redirect(`${users.length -1}`)
    }else{

    }res.send("hello")
    
})


router.get('/names', (req, res)=>{
    res.send("Mic Es")
})
router.post('/', (req, res)=>{
    res.send('register user')
})

router.route('/:id')
.get(
    (req, res)=>{
        console.log(req.user)
        const id = req.params.id
        res.send(`get user by id ${id}`)
    })
.post(
    (req, res)=>{
        const id = req.params.id
        res.send(`Post user by id ${id}`)
    }
).delete(
    (req, res)=>{
        const id = req.params.id
        res.send(`delete user by id ${id}`)
    }
).put(
    (req, res)=>{
        const id = req.params.id
        res.send(`put user by id ${id}`)
    }
)
const users = [ {name: "Mic"}, {name: "Es"}]
router.param('id', (req, res, next, id)=>{
    req.user = users[id]
    next()

})

function logger(req, res, next){
console.log(req.originalUrl)
next()
}

module.exports = router