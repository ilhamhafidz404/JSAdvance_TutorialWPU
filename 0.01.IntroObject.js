const programmer = {
  // variabel dalam object disebut "Property"
  nama: "Ilham Hafidz",
  umur: 18,
  alamat: {
    desa: "Sukarasa",
    rt: 18,
    rw: 05,
  },
  //   function dalam object disebut method
  sapa: function () {
    return `Halo ${this.nama}`;
  },
};

// bisa menambahkan object dengan cara
programmer.pekerjaan = "Mahasiswa";
// Cara tersebut juga bisa diketikan di console

// untuk pemanggilan property/method objectnya bisa dilakukan dengan
console.log(programmer.nama);
// atau
console.log(programmer["nama"]);
// bisa juga digabung
console.log(programmer.alamat["desa"]);
