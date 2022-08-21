console.log(this == window); //true

// function declaration
function declaration(nama, umur) {
  let data = {};
  data.nama = nama;
  data.umur = umur;
  console.log(this);
  return data;
}
declaration("Ilham Hafidz", 18);
// this pada function declaration mengembalikan nilai window(GLOBAL)

// object literal
let literal = {
  halo: function halo(pesan) {
    console.log(this);
    return pesan;
  },
};
literal.halo("saya ilham");
// this pada object literal mengembalikan object itu sendiri

// constructor
function Halo() {
  console.log(this);
}
new Halo();
// this pada constructor mengembalikan object yang baru dibuat
