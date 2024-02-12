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

app.post("/wedding_details", (req, res) => {
    res.statusCode = 201;
    res.setHeader("Location", "/wedding_details/123");
    res.send();
});

//expenses
app.get("/expenses/:user_id", (req, res) => {
    res.json(data.expenses);
});

//add new expense
app.post("/expenses/:user_id", (req, res) => {
    res.statusCode = 201;
    res.setHeader("Location", "/expenses/123/1");
    res.send();
});

//edit expense
app.put("/expenses/:user_id/:id", (req, res) => {
    
    res.statusCode = 201;
    res.setHeader("Location", "/expenses/123/1");
    res.send();
});


//guests
app.get("/guests/:user_id", (req, res) => {
    res.json(data.guests);
});

app.post("/guests", (req, res) => {
    res.statusCode = 201;
    res.setHeader("Location", "/guests/123");
    res.send();
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});