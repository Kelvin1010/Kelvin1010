const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const usersRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories");
const multer = require('multer')
const path = require("path")

app.use(express.json());
mongoose.connect('mongodb+srv://kelvinward:daovanduyIMP1010@cluster0.uxkz5.mongodb.net/blog?retryWrites=true&w=majority')
    .then(console.log("Connected with Mongoose DB"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'images')
    },
    filename:(req,file,cb) => {
        cb(null,req.body.name)
    }
})

app.use("/images", express.static(path.join(__dirname,"/images")))

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been Upload!")
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


const port = 9999
app.listen(port, () => {
    console.log(`API server on localhost:${port}`)
})