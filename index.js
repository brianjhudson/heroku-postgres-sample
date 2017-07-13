require('dotenv').config()
const app = require('express')()
const massive = require('massive')

massive(process.env.DATABASE_URL)
.then(db => {
   console.log(db)
   app.set('db', db)
})
app.get('/', (req, res, next) => {
   req.app.get('db').city.find({'population >': 3000000}, {order: 'population desc', limit: 1})
   .then(results => {
      res.send("<h1>Hello</h1><h2>Most Populous City From Database</h2><p>" + results[0].name + "</p>")
   })
})
app.listen(process.env.PORT, () => {
   console.log("Hey there")
})