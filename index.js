const app = require('./app')
const port = 3000 || process.env.PORT

app.listen(port, ()=>{
    console.log(`connected on port ${port}`)
})