import express from "express";
import data from "./store.js";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


//wedding details
app.get("/wedding_details/:id", (req, res) => {
    res.json(data.wedding_details_one);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});