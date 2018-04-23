const mongoose = require('mongoose');
require('../models/branchData');

const Branch = mongoose.model('branches');

module.exports = (app) => {
    app.post('/api/branch', async (req, res) => {
        const branch = new Branch({
            branchName: req.body.branchName,
            anglePrice: req.body.anglePrice,
            cutPrice: req.body.cutPrice,
            customStitch: req.body.customStitch,
            stitchAlignment: req.body.stitchAlignment,
            multiMaterial: req.body.multiMaterial,
            curvePrice: req.body.curvePrice,
            packPrice: req.body.packPrice
        });
        try {
            await branch.save();
            res.send(branch);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/branches', (req, res) => {
        Branch.find({})
            .then(branches => {
                res.send({
                    branches
                });
            });
    });
    app.delete('/api/remove-branch/:id', (req, res) => {
        Branch.findOneAndRemove({
            _id: req.params.id
        }).then(() => {
            res.send(req.params.id)
        });
    });
};