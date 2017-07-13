require('dotenv').config()
const app = require('express')()

app.get('/', (req, res, next) => {
   res.send("<h1>Hello</h1>")
})
app.listen(process.env.PORT, () => {
   console.log("Hey there")
})