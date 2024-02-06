// Mengambil nama dari URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

// Memeriksa apakah nama diterima dengan baik dan menampilkannya di konsol
if (name) {
  console.log("Nama yang diterima:", name);
} else {
  console.log("Tidak ada nama yang diterima.");
}

// Array nama gambar untuk teks narasi
var namaGambar = [
  "gambar1",
  "gambar2",
  "gambar3",
  "gambar4",
  "gambar5",
  "gambar6",
  "gambar7",
  "gambar8",
  "gambar9",
  "gambar10",
  "gambar11",
  "gambar12",
  "gambar13",
  "gambar14",
  "gambar15",
  "gambar16",
  "gambar17",
  "gambar18",
  "gambar19",
  "gambar20",
];

// Objek yang memetakan nama gambar ke teks narasi
var narasiGambarMap = {
  gambar1: "Bung Tomo-Surabaya-3 Oktober 1920",
  gambar2: "dr.Tjipto Mangoenkoesoemo-Jepara-4 Maret 1886",
  gambar3: "Tjoet Nyak Meutia-Aceh-15 Februari 1870",
  gambar4: "Dewi Sartika-Bandung-4 Desember 1884",
  gambar5: "Pangeran Diponegoro-Jojgakarta-11 November 1785",
  gambar6: "KH Fakhruddin-Jogjakarta-1890",
  gambar7: "Dr. (H.C.) Drs. H. Mohammad Hatta-Minangkabau-12 Agustus 1902",
  gambar8: "Jenderal Besar TNI (Anumerta) Raden Soedirman-Purbalingga-24 Januari 1916[",
  gambar9: "Ahmad Yani-Purworejo-23 Juni 1962",
  gambar10: "R.A Kartini-Jepara-21 April 1879",
  gambar11: "Ki Hadjar Dewantara-Jogjakarta-2 Mei 1889",
  gambar12: "Martha Christina Tiahahu-Maluku-4 Januari 1800",
  gambar13: "Nyai Ageng Serang-Surakarta-1 Oktober 1752",
  gambar14: "Kapitan Pattimura-Maluku-8 Juni 1783 ",
  gambar15: "Ir. H. Soekarno-Surabaya-18 Agustus 1945",
  gambar16: "Soepomo-Sukoharjo-22 Januari 1903",
  gambar17: "Soetan Sjahrir-Padang Panjang-5 Maret 1909 ",
  gambar18: "Tan Malaka-Nagari Pandam Gadang-25 Desember 1921",
  gambar19: "Tjoet Nyak Meutia-Aceh-15 Februari 1870",
  gambar20: "Tuanku Imam Bonjol-Bonjol-1 Januari 1772.",
};

// Array yang berisi nama-nama file audio
var audioFiles = ["17agustus.mp3", "bagimuNegeri.mp3", "haloBandung.mp3", "majuTakGentar.mp3", "berkibarlah.mp3", "tanahAirku.mp3"];
// Variable untuk sumber musik pahlawan
let pageBGM;

// Fungsi untuk memilih audio secara acak dari array
function chooseRandomAudio() {
  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}
var randomAudio = chooseRandomAudio(); // Memilih audio secara acak
pageBGM = new Audio(randomAudio);
// Method untuk meloop music
pageBGM.play();

// Ambil elemen div gambarContainer dari DOM
var gambarContainer = document.getElementById("gambarContainer");

// Buat elemen gambar
var gambar = document.createElement("img");

// Set atribut src untuk menentukan alamat gambar
gambar.src = "image/" + name + ".jpg";

// Set atribut alt untuk deskripsi gambar
gambar.alt = "Gambar Pahlawan";

// Atur ukuran resolusi gambar
gambar.style.width = "500px";
gambar.style.height = "500px";

// Masukkan elemen gambar ke dalam elemen div gambarContainer
gambarContainer.appendChild(gambar);

// Ambil elemen div narasiGambar dari DOM
var narasiGambar = document.getElementById("narasiGambar");

// Buat elemen teks untuk narasi gambar
var teksNarasi = document.createElement("p");

// Cek apakah namaGambar ada dalam map, kemudian set teks narasinya
if (name && narasiGambarMap[name]) {
  teksNarasi.textContent = narasiGambarMap[name];
} else {
  teksNarasi.textContent = "Tidak ada narasi untuk gambar ini.";
}

// Masukkan elemen teks ke dalam elemen div narasiGambar
narasiGambar.appendChild(teksNarasi);
