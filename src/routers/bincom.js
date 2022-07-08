const express = require('express');
const PollingUnit = require('../models/pollingUnit')
const router  = new express.Router();

// QUESTION 1
//A page to display result from each polling unit
router.get('/polling_unit/:id', async (req, res) => {
   const _id = req.params.id
    try {
     const polling_unit = await PollingUnit.findById({_id});
     if(!polling_unit) return res.status(404).send('No Polling Unit With that Id')
     res.status(200).send(polling_unit)
 } catch (error) {
    res.status(500).send(error)
 }
})

// QUESTION 2
// A page to display the summed total of all the polling units under a LGA
router.get('/totalPoll/localGovArea', async (req, res) => {
    try {
        const count = await PollingUnit.countDocuments({lga_id: req.body.lga_id})
        const totalResultinParticularLGA = await PollingUnit.find({lga_id: req.body.lga_id});
        res.status(200).send({totalResultinParticularLGA, count});
    } catch (error) {
        res.status(400).send(error)
    }
})


// QUESTION 3
// A new polling unit to store result for all parties
router.post('/new_party', async (req, res) => {
   try {
    const polling_unit = new PollingUnit(req.body);
    await polling_unit.save()
    res.status(200).send(polling_unit);
   } catch (error) {
       res.status(200).send(error)
   }
});

module.exports = {
    router
}
