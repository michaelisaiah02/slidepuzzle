// Mengambil nama dari URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

// Ambil elemen body
const bodyElement = document.body;

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
  gambar1:
    "<h3>Bung Tomo</h3>\n\nSeorang pahlawan nasional yang lahir di Surabaya pada tanggal 3 Oktober 1920. Beliau dikenal sebagai tokoh pejuang kemerdekaan Indonesia, terutama dalam peristiwa pertempuran Surabaya. Bung Tomo memainkan peran penting dalam membangkitkan semangat juang rakyat Surabaya untuk melawan penjajah. Keberanian dan dedikasinya membuatnya dihormati sebagai salah satu pahlawan perintis kemerdekaan Indonesia.",
  gambar2:
    "<h3>Dr. Tjipto Mangoenkoesoemo</h3>\n\nLahir di Jepara pada tanggal 4 Maret 1886. Beliau adalah seorang dokter dan tokoh pergerakan nasional Indonesia. Dr. Tjipto Mangoenkoesoemo aktif dalam berbagai kegiatan politik dan pergerakan nasional untuk mencapai kemerdekaan Indonesia. Dengan pendidikan kedokterannya, beliau juga berkontribusi dalam bidang kesehatan untuk kesejahteraan masyarakat.",
  gambar3:
    "<h3>Tjoet Nyak Meutia</h3>\n\nLahir di Aceh pada tanggal 15 Februari 1870. Beliau merupakan salah satu pejuang wanita yang berperan dalam perang Aceh melawan penjajah Belanda. Tjoet Nyak Meutia dikenal sebagai pahlawan nasional yang gigih dan berani mempertahankan tanah airnya. Perjuangannya menjadi inspirasi bagi perempuan-perempuan Indonesia.",
  gambar4:
    "<h3>Dewi Sartika</h3>\n\nLahir di Bandung pada tanggal 4 Desember 1884. Beliau adalah pendidik dan tokoh pergerakan nasional Indonesia. Dewi Sartika mendirikan sekolah untuk perempuan pertama di Hindia Belanda, yaitu Sekolah Isteri (Sekolah Kaoetamaan Isteri). Kontribusinya dalam bidang pendidikan membuka jalan bagi perempuan Indonesia untuk mendapatkan pendidikan formal.",
  gambar5:
    "<h3>Pangeran Diponegoro</h3>\n\nLahir di Yogyakarta pada tanggal 11 November 1785. Beliau adalah pahlawan nasional yang terlibat dalam perang Diponegoro melawan pemerintah kolonial Belanda. Pangeran Diponegoro dikenal sebagai pemimpin yang gigih dan berprinsip, memimpin perlawanan dengan gagah berani demi kebebasan dan martabat bangsanya.",
  gambar6:
    "<h3>KH Fakhruddin</h3>\n\nLahir di Yogyakarta pada tahun 1890. Beliau adalah seorang ulama dan pemimpin agama yang berperan dalam memajukan pendidikan agama Islam. KH Fakhruddin aktif dalam menyebarkan nilai-nilai keagamaan dan menjadi inspirasi bagi masyarakat untuk meningkatkan pemahaman agama dalam kehidupan sehari-hari.",
  gambar7:
    "<h3>Dr. (H.C.) Drs. H. Mohammad Hatta</h3>\n\nLahir di Minangkabau pada tanggal 12 Agustus 1902. Beliau adalah tokoh proklamator kemerdekaan Indonesia dan merupakan Wakil Presiden pertama Indonesia. Mohammad Hatta aktif dalam pergerakan nasional dan berperan dalam merumuskan dasar-dasar negara Indonesia merdeka.",
  gambar8:
    "<h3>Jenderal Besar TNI (Anumerta) Raden Soedirman</h3>\n\nLahir di Purbalingga pada tanggal 24 Januari 1916. Beliau adalah panglima besar Tentara Nasional Indonesia (TNI) yang memimpin perang kemerdekaan Indonesia. Raden Soedirman dikenal sebagai pemimpin militer yang memiliki keberanian dan dedikasi tinggi dalam melawan penjajah.",
  gambar9:
    "<h3>Ahmad Yani</h3>\n\nLahir di Purworejo pada tanggal 23 Juni 1922. Beliau adalah Jenderal TNI yang berperan penting dalam perjuangan kemerdekaan Indonesia. Ahmad Yani menjadi Kepala Staf Angkatan Darat dan terlibat dalam berbagai pertempuran penting. Namanya diabadikan sebagai salah satu pahlawan nasional Indonesia.",
  gambar10:
    "<h3>R.A Kartini</h3>\n\nLahir di Jepara pada tanggal 21 April 1879. Beliau adalah seorang tokoh emansipasi wanita Indonesia yang berjuang untuk hak-hak perempuan. Kartini dikenal karena upayanya dalam memajukan pendidikan perempuan. Hari Kartini, yang diperingati setiap tanggal 21 April, diambil dari nama beliau untuk menghormati kontribusinya.",
  gambar11:
    "<h3>Ki Hadjar Dewantara</h3>\n\nLahir di Jogjakarta pada tanggal 2 Mei 1889. Beliau dikenal sebagai pelopor pendidikan nasional Indonesia dan pendiri Taman Siswa, sebuah lembaga pendidikan yang menekankan pendidikan kebangsaan dan karakter. Ki Hadjar Dewantara memainkan peran penting dalam mengembangkan sistem pendidikan di Indonesia.",
  gambar12:
    "<h3>Martha Christina Tiahahu</h3>\n\nLahir di Maluku pada tanggal 4 Januari 1800. Beliau adalah pahlawan nasional yang terlibat dalam perang Pattimura melawan pemerintah kolonial Belanda. Martha Tiahahu dikenal karena keberaniannya dan menjadi simbol perlawanan terhadap penjajah di wilayah Maluku.",
  gambar13:
    "<h3>Nyai Ageng Serang</h3>\n\nLahir di Surakarta pada tanggal 1 Oktober 1752. Beliau adalah pahlawan wanita yang berperan dalam perang Diponegoro melawan penjajah Belanda. Nyai Ageng Serang terlibat dalam pertempuran dan menjadi inspirasi bagi perempuan Indonesia yang berjuang melawan penjajah.",
  gambar14:
    "<h3>Kapitan Pattimura</h3>\n\nLahir di Maluku pada tanggal 8 Juni 1783. Beliau adalah panglima perang yang memimpin pemberontakan terhadap penjajah Belanda dalam perang Pattimura. Kapitan Pattimura dikenal sebagai salah satu pahlawan nasional yang gigih dan berani mempertahankan kemerdekaan.",
  gambar15:
    "<h3>Ir. H. Soekarno</h3>\n\nLahir di Surabaya pada tanggal 18 Agustus 1945. Beliau adalah Proklamator dan Presiden pertama Indonesia. Soekarno memainkan peran sentral dalam perjuangan kemerdekaan dan pembentukan negara Indonesia. Kepemimpinannya membawa Indonesia menjadi negara merdeka.",
  gambar16:
    "<h3>Soepomo</h3>\n\nLahir di Sukoharjo pada tanggal 22 Januari 1903. Beliau adalah tokoh hukum dan politik Indonesia yang terlibat dalam penyusunan Undang-Undang Dasar 1945. Soepomo juga merupakan salah satu tokoh pendiri Universitas Indonesia.",
  gambar17:
    "<h3>Soetan Sjahrir</h3>\n\nLahir di Padang Panjang pada tanggal 5 Maret 1909. Beliau adalah tokoh negarawan Indonesia dan perdana menteri pertama Indonesia setelah kemerdekaan. Sjahrir aktif dalam diplomasi internasional dan berkontribusi dalam pembentukan negara Indonesia.",
  gambar18:
    "<h3>Tan Malaka</h3>\n\nLahir di Nagari Pandam Gadang pada tanggal 25 Desember 1894. Beliau adalah seorang revolusioner dan tokoh pergerakan nasional Indonesia. Tan Malaka terlibat dalam perjuangan melawan penjajah dan memiliki peran penting dalam perumusan dasar negara Indonesia merdeka.",
  gambar19:
    "<h3>Tjoet Nyak Meutia</h3>\n\nLahir di Aceh pada tanggal 15 Februari 1870. Beliau adalah pahlawan nasional yang berperan dalam perang Aceh melawan penjajah Belanda. Tjoet Nyak Meutia dikenal sebagai pahlawan wanita yang gigih dan berani mempertahankan tanah airnya.",
  gambar20:
    "<h3>Tuanku Imam Bonjol</h3>\n\nLahir di Bonjol pada tanggal 1 Januari 1772. Beliau adalah panglima perang dan ulama yang memimpin perlawanan rakyat Minangkabau melawan penjajah Belanda. Tuanku Imam Bonjol dikenal sebagai pahlawan nasional yang memiliki semangat perjuangan tinggi.",
};

// Fungsi untuk memilih audio secara acak dari array
function chooseRandomAudio() {
  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}

function displayLongText(text) {
  // Pisahkan teks menjadi paragraf jika perlu
  var paragraphs = text.split("\n\n"); // Anda dapat menggunakan pemisah yang sesuai
  paragraphs.forEach(function (paragraph) {
    var pElement = document.createElement("p");
    pElement.innerHTML = paragraph;
    teksNarasi.appendChild(pElement);
  });
}

function changeBackground(name) {
  const backgroundURL = `url('image/backgrounds/${name}.jpg')`;
  bodyElement.style.backgroundImage = backgroundURL;
}

// Array yang berisi nama-nama file audio
var audioFiles = ["17agustus.mp3", "bagimuNegeri.mp3", "haloBandung.mp3", "majuTakGentar.mp3", "berkibarlah.mp3", "tanahAirku.mp3"];
// Variable untuk sumber musik pahlawan
let pageBGM;

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
gambar.classList.add("rounded-top-5");

// Masukkan elemen gambar ke dalam elemen div gambarContainer
gambarContainer.appendChild(gambar);

// Ambil elemen div narasiGambar dari DOM
var narasiGambar = document.getElementById("narasiGambar");

// Buat elemen teks untuk narasi gambar
var teksNarasi = document.getElementById("teksNarasi");
teksNarasi.classList.add("text-center");

if (name && narasiGambarMap[name]) {
  var narasiText = narasiGambarMap[name];
  displayLongText(narasiText);
  changeBackground(name);
} else {
  teksNarasi.textContent = "Tidak ada narasi untuk gambar ini.";
}

// Masukkan elemen teks ke dalam elemen div narasiGambar
narasiGambar.appendChild(teksNarasi);
