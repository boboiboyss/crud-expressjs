let books = [
    {id: 1, name: 'Javascript', email: 'javascript@gmail.com'},
    {id: 2, name: 'PHP', email: 'php@gmail.com'},
    {id: 3, name: 'Ruby', email: 'ruby@gmail.com'}
]

module.exports = {
    get: (req, res) => {
        // if(Books.length > 0) {
            // res.json({
            //     status : true,
            //     data : Books,
            //     method: req.method,
            //     url:req.url
            // })
            res.render('pages/book/index', {books})
        // } else {
        //     res.json({
        //         status: false,
        //         message : 'Data buku masih kosong '
        //     })
        // }
    },
    post: (req, res) => {
        let id = books.length + 1;
        let {name, email} = req.body
        books.push({id, name, email})
        console.log(books)
        // res.json({
        //     status : true,
        //     data: books,
        //     messsage: 'Data buku berhasil ditambahkan',
        //     method: req.method,
        //     url:req.url
        // })
        res.redirect('/books')
    },
    put: (req, res) => {
        const id = req.params.id
        const name = req.body.name
        books.filter(book => {
            if(book.id == id) {
                book.name = name
                return book
            }
        })
        res.json({
            status : true,
                data: books,
                messsage: 'Data buku berhasil diupdate',
                method: req.method,
                url:req.url
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        books = books.filter(book => book.id != id)
        res.json({
            status : true,
                data: books,
                messsage: 'Data buku berhasil dihapus',
                method: req.method,
                url:req.url
        })
    },
    create: (req, res) => {
        res.render('pages/book/create')
    },
    detail: (req, res) => {
        try{
            const id = req.params.id
            const data = books.find(book => book.id === +id)
            if(!data) 
                throw {status : 'undefined', message : 'data tidak ditemukan'}

            else {
                // res.status(200).json({
                //    statusCode : 200,
                //    data,
                //    message : 'pencarian berhasil'
                // })
                res.render('pages/book/detail', {data})
            }

        } catch (err) {
            if(err.status === 'undefined') {
                console.log(err.message)            
                res.status(404).json({
                    statusCode : 404,
                    message : err.message
                })
                // res.render('pages/book/notfound', {id})
            }
            // res.render('pages/book/notfound', {id})
        }


        // if(data) {
        //     res.render('pages/book/detail', {data})
        // } else {
        //     res.render('pages/book/notfound', {id})
        // }
    }
}