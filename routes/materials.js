const mongoose = require('mongoose');
require('../models/material');

const Material = mongoose.model('materials');

module.exports = (app) => {
    app.post('/api/materials', async (req, res) => {
        const material = new Material({
            branch: req.body.branch,
            name: req.body.name,
            price: req.body.price,
            priceGold: req.body.priceGold,
            pricePlatinum: req.body.pricePlatinum
        });
        try {
            await material.save();
            res.send(material);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/collections', (req, res) => {
        Material.find({})
            .then(materials => {
                res.send({
                    materials
                });
            });
    });
    app.delete('/api/remove/:id', (req, res) => {
        Material.findOneAndRemove({
            _id: req.params.id
        }).then(() => {
            res.send(req.params.id)
        });
    });

    app.put('/api/edit/:id', (req, res) => {
        Material.findById({ 
            _id: req.params.id 
        }).then(material => {
            material.branch = req.body.branch || material.branch,
            material.name = req.body.name || material.name,
            material.price = req.body.price || material.price,
            material.priceGold = req.body.priceGold || material.priceGold,
            material.pricePlatinum = req.body.pricePlatinum || material.pricePlatinum
            material.save()
                .then(material => {
                    res.send(material)
                });
        })
    });
};