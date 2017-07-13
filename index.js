const app = require('express')()

app.get('/', (req, res, next) => {
   res.send("<h1>Hello</h1>")
})
app.listen(process.env.PORT || 3000, () => {
   console.log("Hey there")
})