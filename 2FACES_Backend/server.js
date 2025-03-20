import express from 'express';
import cors from 'cors';
import 'dotenv/config'

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.get('/', (req, res) => {res.send('API is running')});
app.listen(port, () => console.log(`Server is running on port ${port}`));  