// 1.Method Concat adalah method yang digunakan untuk menggabungkan dua atau lebih array menjadi sebuah array. 
const mobil = ["Pajero", "Mercedez"];
const motor = ["Vario", "Vespa"];

const kendaraan = mobil.concat(motor);
console.log(kendaraan);

// 2.Method Length adalah method yang digunakan untuk menghitung jumlah karakter yang ada.
const pakaian = ["Kemeja", "Kaos", "Celana", "Jaket"];
let size = pakaian.length;
console.log(size);

// 3.Method Push adalah method yang digunakan untuk menambahkan satu atau lebih elemen ke akhir array.
const minuman = ["Es Teh Manis", "Es Jeruk", "Teh Panas"];
minuman.push("Jeruk Panas");
console.log(minuman);

// 4.Method Shift adalah method yang digunakan untuk menghapus array pertama dan menggeser array yang lainnya
const makanan = ["Ayam Geprek", "Nasi Goreng", "Mie Ayam", "Baso"];
makanan.shift();
console.log(makanan);

//5. Method Unshift adalah method yang digunakan untuk menambahkan item baru ke awal array.
const jajanan = ["Seblak", "Cimol", "Makaroni"];
jajanan.unshift("Batagor");
console.log(jajanan);

// 6.Method Replace adalah method yang digunakan untuk  mengganti bagian dari string yang diberikan dengan substring baru.
let text = "Selamat Datang di Cirebon, Cirebon merupakan kota udang";
let newText = text.replace("Cirebon", "Bandung");
console.log(newText);

// 7.Method ReplaceAll adalah method yang digunakan untuk mengganti semua string yang dituju.
let text3 = "Saya suka ikan, ikan adalah hewan yang menggemaskan, ikan juga hewan yang sering dipelihara";
let text4 = text3.replaceAll("ikan", "kucing");
console.log(text4);

// 8.Method Sort adalah method yang digunakan untuk mengurutkan array.
const elektronik = ["Laptop", "Handphone", "TV", "AC"];
elektronik.sort();
console.log(elektronik);

// 9.Method UPPERCASE adalah method yang digunakan untuk mengubah semua huruf kecil menjadi huruf besar.
let text1 = "Selamat datang di indomaret!";
let textBaru = text1.toUpperCase();
console.log(textBaru);

// 10.Method lowercase adalah method yang digunakan untuk mengubah semua huruf besar menjadi huruf kecil.
let greet = "SELAMAT DATANG DI ALFAMART";
let greet2 = greet.toLowerCase();
console.log(greet2);