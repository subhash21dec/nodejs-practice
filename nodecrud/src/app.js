const express = require("express");
const MensRanking = require("../src/models/mens");
require("../src/db/conn");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//we will handle post req
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//we will handle get req
app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//we will handle get req of indiv
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});
//we will handle patch req of indiv
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
