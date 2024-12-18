import express from "express"
import  cors from "cors"
import studRouter from "./Routes/student"
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT||3000

app.use("/student",studRouter)


app.listen(port,()=>{
    console.log(`app is running on port`,port);
    
})