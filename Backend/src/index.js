import app from "./app.js";
import connectDB from "./Config/database.js";
import dotenv from 'dotenv'

dotenv.config();

const PORT =process.env.PORT || 2024

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB();
} )