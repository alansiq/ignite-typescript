import express from 'express';
import { createCourse } from './routes';

const PORT = 3333;
const app = express();

app.use(express.json());
app.get("/", createCourse);

app.listen(PORT, () => {
    console.log('App is listening at ' + PORT);
})