const express = require('express')
const app = express()
const listBook = require('./router/books')
const listBarang = require('./router/barang')
const apiSiswa = require('./router/siswa')
// const conn = require('./helper/connecting')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

const myLogger = function (req, res, next) {
    req.Time = new Date()
    next()
}

// app.use(connection)

app.use(myLogger)
app.set('view engine', 'ejs') //default folder view
// app.set('views',  './view') //berdasarkan path folder
// app.set('views', './component')
app.use('/assets', express.static('public'))
//install ejs => npm install ejs

let user = {
    id: 1,
    name: 'Rucky',
}
app.get('/', (req, res) => {
    // res.send('Mengulang Kembali')
    // res.send('<h3>Home Page</h3>')
    let responText = `Hello World!<br>`
    responText += `<small>Requested at: ${req.requestTime}</small>`
    // res.send(responText)
    // res.json({
    //     user,
    //     date: req.Time.toString()
    // })
    res.render('pages/index', {user:user, pesan: 'Hello there!'})
})

app.get('/about', (req, res)=> {
    res.render('pages/about')
})

app.get('/library', (req, res)=> {
    res.render('library')
})

app.get('/perpus', (req, res)=> {
    res.render('views/perpus')
})

app.get('/index-contoh', (req, res) => {
    res.render('page/index')
})

app.get('/contoh', (req, res) => {
    res.render('page/contoh')
})

app.get('/content', (req, res) => {
    res.render('pages/content')
})

app.get('/me', (req, res) => {
    // res.send('This is my page')
    res.redirect('/users')
})

//coba database ========================================================>
// app.get('/siswa', (req, res) => {
//  conn.query('select * from tb_siswa', (err, result) => {
//     if(err) {
//         console.log('table tidak ditemukan')
//         res.end()
//     } else {
//         res.send(result)
//     }
//  }) 
// })

// app.post('/siswa', (req, res) => {
//     const {name, email, jurusan} = req.body
//     conn.query(`INSERT INTO tb_siswa (name, email, jurusan) values ('${name}', '${email}', '${jurusan}')`, (err, result) => {
//         if(err) {
//             console.log('Data tidak berhasil ditambahkan')
//         } else {
//             res.json({
//                 data : result,
//                 message : `Mahasiswa ${name} berhasil ditambahkan`
//             })
//         }
//     })
// })

// app.put('/siswa/:id', (req, res) => {
//     const id = req.params.id
//     const {name, email, jurusan} = req.body
//     conn.query(`update tb_siswa set name = '${name}', email = '${email}', jurusan ='${jurusan}' where id = ${+id}`, (err, result) => {
//         if(err) {
//             console.log(err)
//         } else {
//             if(result.changedRows == 1) {
//                 res.json({
//                     data : result,
//                     message : `data berhasil diperbaruhi`
//                 })
//             } else {
//                 res.json({
//                     data : result,
//                     message : `data gagal diperbaruhi`
//                 })
//             }
//         }
//     } )
// })

// app.delete('/siswa/:id', (req, res) => {
//     const {id} = req.params
//     conn.query(`delete from tb_siswa where id = ${+id}`, (err, result) => {
//         if(err) {
//             console.log(err)
//         }
//         else {
//             res.json({
//                 data : result,
//                 message : `Data id = ${+id} berhasil dihapus`
//             })
//         }
//     })
// })

// app.get('/siswa/:id', (req, res) => {
//     const {id} = req.params
//     conn.query(`select * from tb_siswa where id= ${id}`, (err, result) => {
//         try {
//             if(err) throw {status: 'QueryError', message:'doest table exist'}
//             else {
//                 if(result <= 0) throw {status : 'ResultNull', message : 'id siswa tidak ditemukan'}
//                 else {
//                     res.json({
//                     data : result,
//                     message : 'successfully',
//                     })
//                 }
//             }
//         } catch (error) {
//             if (error.status === 'QueryError') {
//                res.status(500).json({
//                    statusCode : 500,
//                    message: error.message,
//                    data : error
//                })
//              } 
//              else if(error.status === 'ResultNull') {
//                     res.status(404).json({
//                         statusCode : 404,
//                         message: error.message
//                     })
//              } 
//              else {
//                res.status(500).json({
//                    statusCode: 500,
//                    message : 'Internal Error'
//                })
//            }
//         }

//     }) 
    
    
    
    
//     // penutup query

//     // } catch (error) {
//     //  if (error.status === 'QueryError') {
//     //     res.status(500).json({
//     //         statusCode : 500,
//     //         message: error.message,
//     //         data : error
//     //     })
//     //     res.end();

//     //  } else {
//     //     res.status(500).json({
//     //         statusCode: 500,
//     //         message : 'Internal Error'
//     //     })
//     // }

//     //  else if(error.status === 'ResultNull') {
//     //     res.status(404).json({
//     //         statusCode : 404,
//     //         message: err.message
//     //     })
//     // }
    
// //    }
// })


//======================================================================>


app.get('/data-query', (req, res) => {
    // res.send(req.query)
    const {name, email} = req.query
    res.send(`Hello my name is ${name} and my email is ${email}`)
})

// app.route('/books')
//     .get((req, res) => {
//         res.send('Get Books')
//     })
//     .post((req, res) => {
//         res.send('Post Books')
//     })
//     .put((req, res) => {
//         res.send('Put Books')
//     })
//     .delete((req, res) => {
//         res.send('Delete Books')
//     })

app.get('/users', (req, res) => {
    res.json(user)
})

app.post('/users', (req, res) => {
    const {id, name} = req.body
    res.json({id, name})
})

app.put('/users/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

app.delete('/users/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

app.use(listBook)
app.use(listBarang)
app.use(apiSiswa)
app.listen(8000, ()=> {
    console.log('Server is running')
})