import express from 'express';
const PORT = 3333;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({message: 'Server is up and running!! 🚀'})
})

app.listen(PORT, () => {
    console.log('App is listening at ' + PORT);
})