// parameter adalah variabel yang ditulis di dalam kurung pada saat function dibuat
// digunakan untuk menampung nilai yang dikirim

// argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

//
//
//

// a dan b adalah parameter
function tambah(a, b) {
  return a + b;
}
// 5 dan 10 adalah argument
tambah(5, 10);
// argument dapat berupa cariabel, artimatika atau bahkan function juga

//
//
//

// jika jumlah argument lebih banyak daripada parameter maka argument kelebihannya akan diabaikan
// jika jumlah parameter lebih banyak daripada argument maka parameter kelebihannya akan diberi nilai "undifined"

//
//
//

// arguments
// array yang berisi nilai yang dikirimkan

// dengan arguments ini tidak usah lagi memasukkan parameternya
function pengurangan() {
  var total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total ? (total -= arguments[i]) : (total += arguments[i]);
  }
  return total;
}
console.log(pengurangan(6, 5, 6, 7));
console.log(pengurangan(6, 5, 6, 7, 10, 20, 30));
console.log(pengurangan(20, 10));
// jadi kita bisa custom argument dengan berbeda-beda jumlah argument-nya
