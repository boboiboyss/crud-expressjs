const express = require('express')
const router = express.Router()
const bookController = require('../controller/booksController') 

// let Books = [
//     {id: 1, name: 'Javascript'},
//     {id: 2, name: 'PHP'},
//     {id: 3, name: 'Ruby'}
// ]

router.route('/Books')
    // .get((req, res) => {
    //     if(Books.length > 0) {
    //         res.json({
    //             status : true,
    //             data : Books,
    //             method: req.method,
    //             url:req.url
    //         })
    //     } else {
    //         res.json({
    //             status: false,
    //             message : 'Data buku masih kosong '
    //         })
    //     }
    // })
    .get(bookController.get)

    // .post((req, res) => {
    //     Books.push(req.body)
    //     res.json({
    //         status : true,
    //         data: Books,
    //         messsage: 'Data buku berhasil ditambahkan',
    //         method: req.method,
    //         url:req.url
    //     })
    // })
    .post(bookController.post)

// router.put('/Books/:id', (req, res) => {
//     const id = req.params.id
//     const name = req.body.name
//     Books.filter(book => {
//         if(book.id == id) {
//             book.name = name
//             return book
//         }
//     })
//     res.json({
//         status : true,
//             data: Books,
//             messsage: 'Data buku berhasil diupdate',
//             method: req.method,
//             url:req.url
//     })
// })
router.put('/Books/:id', bookController.put)

// router.delete('/Books/:id', (req, res) => {
//     const id = req.params.id
//     Books = Books.filter(book => book.id != id)
//     res.json({
//         status : true,
//             data: Books,
//             messsage: 'Data buku berhasil dihapus',
//             method: req.method,
//             url:req.url
//     })
// })
router.get('/Books/create', bookController.create)

router.get('/Books/:id', bookController.detail)


router.delete('/Books/:id', bookController.delete)

router.put('/mahasiswa/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

router.delete('/mahasiswa/:nim', (req, res) => {
    res.send(req.params)
})

module.exports = router
