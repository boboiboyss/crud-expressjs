const mysql = require('mysql')

let conn = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : '',
    database : 'db_dw'
});

conn.connect((err) => {
    if(err) {
        console.log('Koneksi gagal')
    }
    else {
        console.log('Koneksi berhasil')
    }
})

// conn.query('INSERT INTO tb_siswa (name, email) values ("Megi Kurniawan", "megikurniawan@yahoo.com")', (err, result) => {
//     if(err) {
//         console.log('Data tidak berhasil ditambahkan')
//     } else {
//         console.log('1 Data siswa berhasil ditambahkan')
//     }
// })

// conn.query('CREATE TABLE tb_mentor (id int, name varchar(32), email varchar(32), alamat varchar(32))', (err, result) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('Table berhasil dibuat')
//     }
// })

// conn.query('alter table tb_mentor change id id INT(12) NOT NULL auto_increment primary key', (err, result) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Column berhasil diubah" + result)
//     }
// })

// conn.query('alter table tb_siswa add column jurusan varchar(32)', (err, result) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('Column berhasil ditambahkan', result)
//     }
// })

// conn.query('alter table tb_siswa change jurusan jurusan varchar(32) NOT NULL', (err, result) => {
//     if(err) {
//         console.log(err)
//     } else {
//        console.log(result + 'Sukses')
//     }
// })





module.exports = conn;