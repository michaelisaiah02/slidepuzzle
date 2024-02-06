// Mengambil nama dari URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

// Memeriksa apakah nama diterima dengan baik dan menampilkannya di konsol
if (name) {
  console.log("Nama yang diterima:", name);
} else {
  console.log("Tidak ada nama yang diterima.");
}

// Variable untuk ukuran layar Puzzle
const SCREEN_WIDTH = 850;
const SCREEN_HEIGHT = 850;

// Variable untuk ukuran gambar Puzzle
const IMAGE_WIDTH = SCREEN_WIDTH;
const IMAGE_HEIGHT = SCREEN_HEIGHT;

// Function untuk membagi kotak gambar
const slice_w = 3;
const slice_h = 3;
let w, h;

// Array untuk papan gambar dan jumlah ubin
let board = [];
let tiles = [];

// Variable untuk satu ubin sehingga kosong
let blankSpot = -1;

// Variable untuk menentukan gambar sudah solve atau belum
let solvedFlag = false;

// Variable untuk sumber gambar pahlawan
let puzzle_source;

// Variable untuk sumber musik pahlawan
let pageBGM;

// Variable untuk sumber FX Spritesheet
let spritesheet;

let snow = [];
let textures = [];

let gravity;

// Array yang berisi nama-nama file audio
var audioFiles = ["17agustus.mp3", "bagimuNegeri.mp3", "haloBandung.mp3", "majuTakGentar.mp3", "berkibarlah.mp3", "tanahAirku.mp3"];

// Fungsi untuk memilih audio secara acak dari array
function chooseRandomAudio() {
  var randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}

// Function untuk meload semua sumber (Spritesheet, Gambar, dan Audio)
function preload() {
  spritesheet = loadImage("image/f32.png"); // Spritesheet
  puzzle_source = loadImage("image/" + name + ".jpg"); // Memilih gambar sesuai pilihan
  var randomAudio = chooseRandomAudio(); // Memilih audio secara acak
  pageBGM = new Audio(randomAudio);
}

// Function untuk setup kanvas gambar
function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(200);

  // Method untuk meloop music
  pageBGM.play();

  // Method untuk setup slide puzzle
  w = IMAGE_WIDTH / slice_w;
  h = IMAGE_HEIGHT / slice_h;
  for (let i = 0; i < slice_w; i++)
    for (let j = 0; j < slice_h; j++) {
      let x = (i + 1) * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(puzzle_source, x, y, w, h, 0, 0, w, h);

      let idx = i + j * slice_h;
      board.push(idx);
      let tile = new Tile(idx, img);
      tiles.push(tile);
    }

  // Method untuk menghapus kotak pertama
  board[0] = -1;

  board_shuffle(board);

  // Method untuk memberikan efek gravitasi untuk spritesheet sehingga efeknya jatuh kebawah
  gravity = createVector(0, 0.01);

  // Method untuk memotong spritesheet sehingga terbagi menjadi beberapa bagian kecil
  for (let x = 0; x < spritesheet.width; x += 32)
    for (let y = 0; y < spritesheet.height; y += 32) {
      let img = spritesheet.get(x, y, 32, 32);
      textures.push(img);
    }
}

// Function untuk menukar kotak ubin kosong dengan kotak ubin gambar
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//FUNCTION JUMLAH ITERASI UNTUK MENGGERAKAN GAMBAR
function board_shuffle(arr) {
  for (let i = 0; i < 10000; i++) {
    randomMove(arr);
  }
}

//FUNCTION UNTUK MENGGERAKAN UBIN GAMBAR SECARA RANDOM
function randomMove(arr) {
  let r1 = floor(random(0, slice_h));
  let r2 = floor(random(0, slice_w));
  tileMove(r1, r2, arr);
}

// FUNCTION UNTUK MENGGERAKAN UBIN GAMBAR
function tileMove(i, j, arr) {
  let blank = findBlank();
  let blankCol = blank % slice_w;
  let blankRow = floor(blank / slice_h);

  if (isNeighbor(i, j, blankCol, blankRow)) {
    swap(blank, i + j * slice_w, arr);
  }
}

// Function untuk mengecek apakah gambar adalah kotak samping (Neighbour) dari kotak kosong?
function isNeighbor(i, j, x, y) {
  if (i !== x && j !== y) return false;

  if (abs(i - x) == 1 || abs(j - y) == 1) return true;

  return false;
}

// Function untuk mengecek apakah kotak ubin gambar tersebut kosong?
function findBlank() {
  for (let i = 0; i < board.length; i++) if (board[i] == -1) return i;
}

// Function untuk pointer bisa klik gambar
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  console.log(i, j);
  tileMove(i, j, board);
}

// Function untuk mengecek apakah gambar sudah selesai atau belum
function isSolved() {
  if (solvedFlag == true) return;
  for (let i = 1; i < board.length; i++) if (board[i] !== tiles[i].idx) return false;
  return true;
}

function draw() {
  background(200);
  //image(puzzle_source,0,0,SCREEN_WIDTH,SCREEN_HEIGHT);

  // menggambar slide puzzle
  for (let i = 0; i < slice_w; i++)
    for (let j = 0; j < slice_h; j++) {
      let index = i + j * slice_h;
      let x = i * w;
      let y = j * h;
      let tileIndex = board[index];
      if (board[index] > -1) {
        let img = tiles[tileIndex].img;
        image(img, x, y, w, h);
      }
    }

  for (let i = 0; i < slice_w; i++)
    for (let j = 0; j < slice_h; j++) {
      let x = i * w;
      let y = j * h;
      strokeWeight(5);
      noFill();
      rect(x, y, w, h);
    }

  // Function jikalau gambar sudah solve
  if (isSolved()) {
    solvedFlag = true;
    window.location.href = "narasi.html?name=" + encodeURIComponent(name);
  }

  // Method untuk memberikan efek salju dari spritesheet
  let design = random(textures);
  snow.push(new Snowflake(design));
  for (flake of snow) {
    flake.update();
    flake.render();
  }
  for (let i = snow.length - 1; i >= 0; i--) {
    if (snow[i].offScreen()) {
      snow.splice(i, 1);
    }
  }
}
