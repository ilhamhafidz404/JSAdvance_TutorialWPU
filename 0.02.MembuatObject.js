// Object Literal
const pelajar1 = {
  nama: "Ilham Hafidz",
  kelas: "XII RPL",
  lulusan: 2022,
};

const pelajar2 = {
  nama: "Imam Hafidz",
  kelas: "XII MM",
  lulusan: 2021,
};

// function declaration
function pelajar(nama, kelas, lulusan) {
  let data = {};
  data.nama = nama;
  data.kelas = kelas;
  data.lulusan = lulusan;
  return data;
}

const pelajar3 = pelajar("Agung Hapsah", "XII MM", 2016);
const pelajar4 = pelajar("Ian Andira", "XI MM", "belum lulus");

// constructor
function Mahasiswa(nama, prodi, angkatan) {
  // nama fungsi disarankan/biasanya diawali huruf besar, sama halnya ketika membuat Class
  this.nama = nama;
  this.prodi = prodi;
  this.angkatan = angkatan;
}
const mahasiswa1 = new Mahasiswa("Ilham Hafidz", "Informatika", 2022);
const mahasiswa2 = new Mahasiswa("Imam Hafidz", "Desain Grafis", 2022);
