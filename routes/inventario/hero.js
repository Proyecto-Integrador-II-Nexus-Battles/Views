const express = require("express");
const heroSchema = require ("../../models/inventario/hero");

const router = express.Router();


//CREATE DATA
router.post("/Heros", (req, res) => {
    const hero = heroSchema(req.body);
    console.log(req.body);
    hero 
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//GET ALL DATA
router.get("/Heros", (req, res) => {
    heroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//GET DATA by ID 
router.get("/Heros/:_id", (req, res) => {
    const { _id } = req.params;
    heroSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
    
});

//Update hero   
router.put("/Heros/:id", (req, res) => {
    //dentro de {iran los campos que se modificaran}
    const { id } = req.params;
    const { Name } = req.body;
    heroSchema
    .updateOne({_id: id}, {$set:{Name/*campos a modificar separados por coma*/ }})   
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//DELETE hero
router.delete("/Heros/:id", (req, res) => {
    const { id } = req.params;
    heroSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});




module.exports = router;