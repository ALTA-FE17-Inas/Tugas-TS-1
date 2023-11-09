/** 
 * Problem 3 : Program Hello + Nama
*/
let nama: string = "Kobar";
let output: string = `Hallo ${nama}! Saya JavaScript bahasa yang sangat menyenangkan.`;
console.log(output);


/**
 * Problem 2 : Menghitung Luas Segitiga
 */
let alas: number = 20; // Alas segitiga dalam satuan cm
let tinggi: number = 25; // Tinggi segitiga dalam satuan cm
let luas: number = 0.5 * alas * tinggi; // Menghitung Luas Segitiga
console.log(`Jadi, hasil Luas Segitiga dengan Alas ${alas} cm dan Tinggi ${tinggi} cm adalah ${luas} cm.`);


/**
 * Problem 3 : Menghitung Luas Permukaan Tabung
 */
let T: number = 20; // Tinggi tabung
let r: number = 4; // jari-jari tabung
let L: number = (2 + Math.PI * r * (r + T)); // menghitung luas tabung
console.log(`Hasil dari Luas Permukaan Tabung dengan Tinggi ${T} cm dan Jari-jari ${r} adalah ${L.toFixed(2)}.`);