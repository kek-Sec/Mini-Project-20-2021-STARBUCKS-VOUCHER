const express = require("express");

const router = express.Router();

const Item = require("../models/users_item");

var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Routes
router.get("/", jsonParser, async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:ItemId", jsonParser, async (req, res) => {
  try {
    const item = await Item.findById(req.params.ItemId);
    res.json(item);
  } catch (err) {
    res.json({ message: err });
  }
});

//handle POST
router.post("/add", jsonParser, async (req, res) => {
  try {
    const item = new Item({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      father_name: req.body.father_name,
      DOB: req.body.DOB,
      AFM: req.body.AFM,
      AMKA: req.body.AMKA,
      CARD_ID: req.body.CARD_ID,
      UNEMPLOYMENT_TIME: req.body.UNEMPLOYMENT_TIME,
      STATUS: req.body.STATUS,
      ADT: req.body.ADT
    });
    item.save().then((result) => {
      res.status(200).json({ item: result });
    });
  } catch (ex) {
    res.json({ error: ex });
  }
});

//Handle delete
router.delete("/:ItemId", jsonParser, async (req, res) => {
  try {
    const item = await Item.findById(req.params.ItemId);
    item.delete().then((result) => {
      res.json({ deleted: result });
    });
  } catch (err) {
    res.json({ error: err });
  }
});
module.exports = router;
