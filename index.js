const exp = require("express")
const app = exp()
const port = 5000
const mainRouter = require("./Router/mainRouter")
require("dotenv").config()

const dbUrl = process.env.connectString
console.log(dbUrl)

app.use(mainRouter)



app.listen(port, () => {
    console.log("App is listen on ", port)
})