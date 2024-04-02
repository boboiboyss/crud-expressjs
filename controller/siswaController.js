const conn = require('../helper/connecting')

module.exports = {
    getData : (req, res) => {
     conn.query('select * from tb_siswa', (err, result) => {
        if(err) {
            console.log('table tidak ditemukan')
        } else {
            res.send(result)
        }
     }) 
    },
    postData : (req, res) => {
        const {name, email, jurusan} = req.body
        conn.query(`INSERT INTO tb_siswa (name, email, jurusan) values ('${name}', '${email}', '${jurusan}')`, (err, result) => {
            if(err) {
                console.log('Data tidak berhasil ditambahkan')
            } else {
                res.json({
                    data : result,
                    message : `Mahasiswa ${name} berhasil ditambahkan`
                })
            }
        })
    },
    updateData : (req, res) => {
        const id = req.params.id
        const {name, email, jurusan} = req.body
        conn.query(`update tb_siswa set name = '${name}', email = '${email}', jurusan ='${jurusan}' where id = ${+id}`, (err, result) => {
            if(err) {
                console.log(err)
            } else {
                if(result.changedRows == 1) {
                    res.json({
                        data : result,
                        message : `data berhasil diperbaruhi`
                    })
                } else {
                    res.json({
                        data : result,
                        message : `data gagal diperbaruhi`
                    })
                }
            }
        } )
    },
    deleteData : (req, res) => {
        const {id} = req.params
        conn.query(`delete from tb_siswa where id = ${+id}`, (err, result) => {
            if(err) {
                console.log(err)
            }
            else {
                res.json({
                    data : result,
                    message : `Data id = ${+id} berhasil dihapus`
                })
            }
        })
    },
    getItemData : (req, res) => {
        const {id} = req.params
        conn.query(`select * from tb_siswa where id= ${id}`, (err, result) => {
            try {
                if(err) throw {status: 'QueryError', message:'doest table exist'}
                else {
                    if(result <= 0) throw {status : 'ResultNull', message : `id ${id} siswa tidak ditemukan`}
                    else {
                        res.json({
                        data : result,
                        message : 'successfully',
                        })
                    }
                }
            } catch (error) {
                if (error.status === 'QueryError') {
                   res.status(500).json({
                       statusCode : 500,
                       message: error.message,
                       data : error
                   })
                 } 
                 else if(error.status === 'ResultNull') {
                        res.status(404).json({
                            statusCode : 404,
                            message: error.message
                        })
                 } 
                 else {
                   res.status(500).json({
                       statusCode: 500,
                       message : 'Internal Error'
                   })
               }
            }
        })
    }
}