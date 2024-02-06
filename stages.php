<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stages Set</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1>Stages</h1>
    <div class="button-container" id="buttonContainer">
      <?php
      // Array untuk nama gambar pahlawan
      $names = array(
        "gambar1", "gambar2", "gambar3", "gambar4", "gambar5", "gambar6", "gambar7", "gambar8", "gambar9", "gambar10", "gambar11",
        "gambar12", "gambar13", "gambar14", "gambar15", "gambar16", "gambar17", "gambar18", "gambar19", "gambar20"
      );

      for ($i = 0; $i < count($names); $i++) {
        echo '<button data-name="' . $names[$i] . '">Gambar ' . ($i + 1) . '</button>';
      }
      ?>
    </div>
  </div>

  <script>
    var buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var name = this.getAttribute('data-name');

        // Redirect Link
        window.location.href = "puzzle.html?name=" + encodeURIComponent(name);
      });
    });
  </script>
</body>

</html>