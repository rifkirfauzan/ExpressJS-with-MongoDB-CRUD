// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router

const router = require("express").Router();
// export controller yang ingin dipakai
const karyawanController = require("../controllers/karyawanController");

// endpoint karyawan
router.get("/", karyawanController.viewKaryawan); // Untuk view
router.post("/", karyawanController.addKaryawan);// Untuk add data
router.put("/", karyawanController.editKaryawan);
router.delete("/:id", karyawanController.deleteKaryawan);

// Lalu export routernya
module.exports = router;