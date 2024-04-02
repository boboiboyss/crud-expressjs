const express = require('express')
const router = express.Router()
const siswaController = require('../controller/siswaController')

router.route('/siswa')
    .get(siswaController.getData)
    .post(siswaController.postData)
router.route('/siswa/:id')
    .get(siswaController.getItemData)
    .put(siswaController.updateData)
    .delete(siswaController.deleteData)

module.exports = router;