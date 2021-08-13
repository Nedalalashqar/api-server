'use strict';

const express = require('express');
const router = express.Router();
const {customerCollection} = require('../models/index');

router.get('/customer', getTypeCustomer);
router.post('/customer', createTypeCustomer);
router.put('/customer/:id', updateTypeCustomer);
router.delete('/customer/:id', deleteTypeCustomer);

async function getTypeCustomer(req, res) {
    let customer = await customerCollection.read();
    res.status(200).json(customer);
}
async function createTypeCustomer(req, res) {
    let newCustomer = req.body;
    let customer = await customerCollection.create(newCustomer);
    res.status(200).json(customer);
}
async function updateTypeCustomer(req, res) {
    let id=req.params.id
    let updateCustomer = req.body;
    let customer = await customerCollection.update(id,updateCustomer);
    res.status(200).json(customer);
}
async function deleteTypeCustomer(req, res) {
    let id=req.params.id
    let customer = await customerCollection.delete(id);
    res.status(200).json(customer);
}

module.exports = router;
