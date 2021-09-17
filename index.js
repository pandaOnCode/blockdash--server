import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();
app.use(express.static("public"))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send('hitting the backend');
})

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
console.log(process.env.CONNECTION_URL)


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// module.exports = {
//     PostCollection: require('./models/postCollection')
// }

