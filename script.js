// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón por su ID
    var btnBlancoNegro = document.getElementById('btn-blanco-negro');
    // Obtén el video por su ID
    var videoFondo = document.getElementById('video-fondo');
  
    // Agrega un evento de clic al botón
    btnBlancoNegro.addEventListener('click', function() {
      // Agrega o remueve la clase "blanco-negro" al elemento body
      document.body.classList.toggle('blanco-negro');
      // Agrega o remueve la clase "blanco-negro" al video de fondo
      videoFondo.classList.toggle('blanco-negro');
    });
  });


// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén los botones por sus ID
    var btnAumentarZoom = document.getElementById('btn-aumentar-zoom');
    var btnDisminuirZoom = document.getElementById('btn-disminuir-zoom');
  
    // Agrega un evento de clic al botón de aumentar zoom
    btnAumentarZoom.addEventListener('click', function() {
      aumentarZoom();
    });
  
    // Agrega un evento de clic al botón de disminuir zoom
    btnDisminuirZoom.addEventListener('click', function() {
      disminuirZoom();
    });
  
    // Función para aumentar el zoom
    function aumentarZoom() {
      var body = document.body;
      var currentZoom = parseFloat(getComputedStyle(body).fontSize);
      var newZoom = currentZoom + 2;
      body.style.fontSize = newZoom + 'px';
    }
  
    // Función para disminuir el zoom
    function disminuirZoom() {
      var body = document.body;
      var currentZoom = parseFloat(getComputedStyle(body).fontSize);
      var newZoom = currentZoom - 2;
      body.style.fontSize = newZoom + 'px';
    }
  });
  
