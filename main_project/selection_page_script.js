function searchAndHighlight() {
    // Отримуємо посилання на елементи DOM
    var searchInput = document.getElementById('search');
    var doctorDetails = document.querySelectorAll('.doctor-details h2');

    // Отримуємо введену фразу
    var searchPhrase = searchInput.value.toLowerCase();

    doctorDetails.forEach(function (element) {
      var originalText = element.textContent; // Зберігаємо початковий текст
      var doctorName = originalText.toLowerCase();

      if (doctorName.includes(searchPhrase)) {
        var highlightedText = originalText.replace(new RegExp(searchPhrase, 'gi'), function (match) {
          return '<span class="highlight">' + match + '</span>';
        });
        element.innerHTML = highlightedText;
        element.parentElement.style.display = 'block';
        // Змінюємо колір виділеного тексту
        var highlightedSpan = element.querySelector('.highlight');
        highlightedSpan.style.color = 'black'; // Змініть 'black' на бажаний колір
      } else {
        element.innerHTML = originalText; // Відновлюємо початковий текст
        element.parentElement.style.display = 'none';
      }
    });
  }