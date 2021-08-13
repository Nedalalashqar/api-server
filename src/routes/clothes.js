'use strict';

const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes');
const collection = require('../models/lip/collection');
const clothesInstance = new collection(clothesModel);

router.get('/clothes', getTypeClothes);
router.get('/clothes/:id', getOneTypeClothes);
router.post('/clothes', createTypeClothes);
router.put('/clothes/:id', updateTypeClothes);
router.delete('/clothes/:id', deleteTypeClothes);

async function getTypeClothes(req, res) {
    let allClothes = await clothesInstance.get();
    res.status(200).json(allClothes);
}
async function getOneTypeClothes(req, res) {
    let _id = req.params.id;
    let oneClothes = await clothesInstance.get(_id);
    res.status(200).json(oneClothes);
}
async function createTypeClothes(req, res) {
    let obj = req.body;
    let newClothes = await clothesInstance.create(obj);
    res.status(201).json(newClothes);
}
async function updateTypeClothes(req, res) {
    let _id = req.params.id;
    let obj = req.body;
    let updatedClothes = await clothesInstance.update(_id, obj);
    res.status(201).json(updatedClothes);
}
async function deleteTypeClothes(req, res) {
    let id = req.params.id;
    let deleted = await clothesInstance.delete(id);
    res.status(202).json(deleted);
}

module.exports = router;
