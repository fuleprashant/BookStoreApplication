import express from "express"

const app = express();
// console.log("the main application is ", app)
const PORT = 8759;

app.get("/data", (req, res) => {
    res.send("the serve is start on the backend")
})
app.listen(PORT, () => {
    console.log(`the sever is start on the port of the http://localhost:${PORT}`)
})
