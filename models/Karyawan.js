
const mongoose = require("mongoose");


//Buat variable baru dengan nama karyawanScheme
const karyawanScheme = new mongoose.Schema({
    nama:{
        //Buat sebuah type dari field nama yang berada di sebuah tabel karyawan
        type:String,
        required:true,
    },
    nip:{
        type:Number,
        required:true,
    },
    jabatan:{
        type:String,
        required:true, 
    },
    alamat:{
        type:String,
        required:true, 
    }
})

// lalu mengekspor model dari karyawan, tujuan mengekspor ini supaya model dari karyawan ini bisa digunakan dimana saja atau reusable
module.exports = mongoose.model("Karyawan", karyawanScheme);

// // This cat has no name :(
//     const cat = new Cat();
//     cat.save(function(error) {
//       assert.equal(error.errors['name'].message,
//         'Path `name` is required.');
    
//       error = cat.validateSync();
//       assert.equal(error.errors['name'].message,
//         'Path `name` is required.');
//     });