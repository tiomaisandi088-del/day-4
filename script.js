// 1. Data barang
const daftarBarang = [
  {
    kode: "INV-001",
    nama: "Laptop",
    stok: 10,
    harga: 7500000
  },
  {
    kode: "INV-002",
    nama: "Mouse",
    stok: 3,
    harga: 150000
  },
  {
    kode: "INV-003",
    nama: "Keyboard",
    stok: 0,
    harga: 300000
  },
  {
    kode: "INV-004",
    nama: "Monitor",
    stok: 7,
    harga: 1800000
  }

];

// 2. Fungsi menentukan status stok
function tentukanStatus(stok) {
  if (stok === 0) {
    return "Habis";
  } else if (stok < 5) {
    return "Menipis";
  } else {
    return "Aman";
  }
}

// 3. fungsi menghitung nilai barang
function hitungNilaiBarang(harga, stok) {
  return harga * stok;
}

// 4. Variabel untuk ringkasan
let totalStok = 0;
let totalNilai = 0;

// 5. Menampilkan data setiap barang
console.log("=== DATA INVENTARIS ===");

for (const barang of daftarBarang) {
  const status = tentukanStatus(barang.stok);
  const nilai = hitungNilaiBarang(
    barang.harga,
    barang.stok
  );

  console.log("------------------------");
  console.log("Kode:", barang.kode);
  console.log("Nama:", barang.nama);
  console.log("Stok:", barang.stok);
  console.log("Harga:", barang.harga);
  console.log("Status:", status);
  console.log("Nilai stok:", nilai);

  totalStok += barang.stok;
  totalNilai += nilai;
}

// 6. Ringkasan
console.log("========================");
console.log("TOTAL JENIS BARANG:", daftarBarang.length);
console.log("TOTAL UNIT STOK:", totalStok);
console.log("TOTAL NILAI INVENTARIS:", totalNilai);

// 7. Menentukan barang dengan nilai stok tertinggi
let barangTertinggi = daftarBarang[0];

for (const barang of daftarBarang) {
  if (hitungNilaiBarang(barang.harga, barang.stok) > hitungNilaiBarang(barangTertinggi.harga, barangTertinggi.stok)) {
    barangTertinggi = barang;
  }
}

console.log("========================");
console.log("BARANG DENGAN NILAI STOK TERGINGGI:");
console.log("Kode:", barangTertinggi.kode);
console.log("Nama:", barangTertinggi.nama);
console.log("Stok:", barangTertinggi.stok);
console.log("Harga:", barangTertinggi.harga);
console.log("Nilai stok:", hitungNilaiBarang(barangTertinggi.harga, barangTertinggi.stok));

// 8. Menentukan barang dengan stok terbanyak
let barangTerbanyak = daftarBarang[0];

for (const barang of daftarBarang) {
  if (barang.stok > barangTerbanyak.stok) {
    barangTerbanyak = barang;
  }
}

console.log("========================");
console.log("BARANG DENGAN STOK TERBANYAK:");
console.log("Kode:", barangTerbanyak.kode);
console.log("Nama:", barangTerbanyak.nama);
console.log("Stok:", barangTerbanyak.stok);
console.log("Harga:", barangTerbanyak.harga);

// 9. Menentukan barang dengan stok paling sedikit (tetapi tidak habis)
let barangSedikit = null;

for (const barang of daftarBarang) {
  if (barang.stok > 0 && (barangSedikit === null || barang.stok < barangSedikit.stok)) {
    barangSedikit = barang;
  }
}

if (barangSedikit !== null) {
  console.log("========================");
  console.log("BARANG DENGAN STOK Paling SEDIKIT:");
  console.log("Kode:", barangSedikit.kode);
  console.log("Nama:", barangSedikit.nama);
  console.log("Stok:", barangSedikit.stok);
  console.log("Harga:", barangSedikit.harga);

  const statusString = tentukanStatus(barangSedikit.stok);
  console.log("Status:", statusString);

}

// 10. Menentukan barang yang habis
const barangHabis = daftarBarang.filter(barang => barang.stok === 0);

console.log("========================");
console.log("BARANG YANG HABIS:");
for (const barang of barangHabis) {
  console.log("Kode:", barang.kode);
  console.log("Nama:", barang.nama);
  console.log("Stok:", barang.stok);
  console.log("Harga:", barang.harga);
}

// 11. Menentukan barang yang menipis
const barangMenipis = daftarBarang.filter(barang => barang.stok > 0 && barang.stok < 5);

console.log("========================");
console.log("BARANG YANG MENIPIS:");
for (const barang of barangMenipis) {
  console.log("Kode:", barang.kode);
  console.log("Nama:", barang.nama);
  console.log("Stok:", barang.stok);
  console.log("Harga:", barang.harga);
}
