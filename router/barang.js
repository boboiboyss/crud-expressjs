const express = require('express')
const router = express.Router()
const barangController = require('../controller/barangController')

router.route('/barang')
    .get(barangController.get)
    .post(barangController.post)
    .put(barangController.put)
    .delete(barangController.delete)

router.get('/customer', (req, res) => {
    res.send('Get Data Customer')
})
router.put('/customer/:id', (req, res)=> {
    const id = req.params
    res.send(id)
})
router.delete('/customer/:id', (req, res) => {
    res.send(req.params)
})
router.get('/barang/:id', barangController.getItem)

module.exports = router