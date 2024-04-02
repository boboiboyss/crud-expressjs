const barang = [
    // {id: 1, nama: 'Handphone', harga : 'Rp. 2.300.000'},
    // {id: 2, nama: 'Laptopt', harga : 'Rp. 5.555.555'},
    // {id: 3, nama : 'Monitor', harga : 'Rp. 7.500.000'}
]

module.exports = {
    get: (req, res) => {
        res.json(barang)
    },
    getItem : (req, res) => {
        try {
            const tesj = []
            // console.log(!!tesj)
            console.log('-------------------')
            const {id} = req.params
            const item = barang.find(item => item.id === +id)
            // console.log(item)
            if(!item) throw {status:'NotFound', message: 'Item barang tidak ditemukan'}
            res.status(200).json({
                statusCode : 200,
                data : item
        })
        } catch (err) {
            if(err.status === 'NotFound') {
                res.status(404).json({
                    statusCode : 404,
                    message : err.message
                })
            }
        }
    },

    post: (req, res) => {
        res.send('Add New Barang')
    },
    put: (req, res) => {
        res.send('Edit Barang')
    },
    delete: (req, res) => {
        res.send('Delete Barang')
    }
}