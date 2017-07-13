const app = require('express')()

app.get('/', (req, res, next) => {
   res.send("<h1>Hello</h1>")
})
app.listen(process.env.port || 3000, () => {
   console.log("Hey there")
})