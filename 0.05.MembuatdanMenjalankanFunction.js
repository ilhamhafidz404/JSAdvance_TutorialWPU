// function yang baik adalah function yang hanya menjalankan 1 tugas
// function adalah sebuah blok program, bisa disebut program dalam program

// membuat function menjumlahkan 2 buah volume kubus
// program versi saya
function rumusVolumeKubus(sisi) {
  return (volume = Math.pow(sisi, 3));
}
function penjumlahan(a, b) {
  return (jumlah = a + b);
}

console.log(penjumlahan(rumusVolumeKubus(8), rumusVolumeKubus(3)));

// program versi WPU (pak dhika)
function jumlahVolumeDUaKubus(a, b) {
  var volumeA, volumeB, total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;
  return total;
}
console.log(jumlahVolumeDUaKubus(8, 3));
