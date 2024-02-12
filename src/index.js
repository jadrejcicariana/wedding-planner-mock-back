import express from "express";
import data from "./store.js";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


//wedding details
app.get("/wedding_details/:user_id", (req, res) => {
    res.json(data.wedding_details_one);
});

//expenses
app.get("/expenses/:user_id", (req, res) => {
    res.json(data.expenses);
});

//guests
app.get("/guests/:user_id", (req, res) => {
    res.json(data.guests);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});