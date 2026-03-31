const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/timetracker");

const Time = mongoose.model("Time", {
    site: String,
    time: Number,
    date: { type: Date, default: Date.now }
});

app.post("/save", async (req, res) => {
    const { site, time } = req.body;

    const entry = new Time({ site, time });
    await entry.save();

    res.send("Saved");
});

app.get("/data", async (req, res) => {
    const data = await Time.find();
    res.json(data);
});

app.listen(5000, () => console.log("Server running"));