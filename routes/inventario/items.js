const express = require("express");
const itemsSchema = require ("../../models/inventario/items");

const router = express.Router();


//CREATE DATA
router.post("/Items", (req, res) => {
    const item = itemsSchema(req.body);
    console.log(req.body);
    item 
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//GET ALL DATA
router.get("/Items", (req, res) => {
    itemsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//GET DATA by ID
router.get("/Items/:_id", (req, res) => {
    const { _id } = req.params;
    itemsSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Update hero   
router.put("/Items/:id", (req, res) => {
    //dentro de {iran los campos que se modificaran}
    const { id } = req.params;
    const { Name } = req.body;
    itemsSchema
    .updateOne({_id: id}, {$set:{Name/*campos a modificar separados por coma*/ }})   
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//DELETE hero
router.delete("/Items/:id", (req, res) => {
    const { id } = req.params;
    itemsSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});




module.exports = router;