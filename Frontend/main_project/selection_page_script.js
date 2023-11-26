// Початок оголошення функції `searchAndHighlight`
function searchAndHighlight() {

  // Отримуємо посилання на елементи DOM
  var searchInput = document.getElementById('search'); // Отримуємо поле введення для пошукової фрази
  var doctorDetails = document.querySelectorAll('.doctor-details h2'); // Отримуємо всі елементи з класом 'doctor-details' та тегом <h2>

  // Отримуємо введену фразу
  var searchPhrase = searchInput.value.toLowerCase(); // Отримуємо введену фразу і перетворюємо її на нижній регістр

  // Починаємо перебір елементів колекції `doctorDetails`
  doctorDetails.forEach(function (element) {

    // Зберігаємо початковий текст елемента
    var originalText = element.textContent;

    // Перетворюємо початковий текст на нижній регістр
    var doctorName = originalText.toLowerCase();

    // Перевіряємо, чи пошукова фраза міститься в тексті лікаря
    if (doctorName.includes(searchPhrase)) {

      // Створюємо новий рядок `highlightedText`, підсвічуючи входження пошукової фрази
      var highlightedText = originalText.replace(new RegExp(searchPhrase, 'gi'), function (match) {
        return '<span class="highlight">' + match + '</span>';
      });

      // Встановлюємо внутрішній HTML елемента на підсвічений текст
      element.innerHTML = highlightedText;

      // Встановлюємо стиль відображення батьківського елемента на 'block', щоб показати елемент
      element.parentElement.style.display = 'block';

      // Знаходимо перше входження елемента з класом 'highlight' і змінюємо колір виділеного тексту
      var highlightedSpan = element.querySelector('.highlight');
      highlightedSpan.style.color = 'black'; // Можна змінити колір

    } else {
      // Якщо пошукова фраза не знайдена, відновлюємо оригінальний текст
      element.innerHTML = originalText;

      // Встановлюємо стиль відображення батьківського елемента на 'none', щоб приховати елемент
      element.parentElement.style.display = 'none';
    }

  });
}