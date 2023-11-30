document.addEventListener('DOMContentLoaded', function() {
    // Adicionando a funcionalidade de rolagem suave ao clique no link de download
    var downloadBtn = document.querySelector('.download-btn');
  
    downloadBtn.addEventListener('click', function(event) {
      event.preventDefault();
      var downloadSection = document.getElementById('download');
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    });
  });