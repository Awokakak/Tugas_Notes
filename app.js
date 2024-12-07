import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes.js';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use('/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
