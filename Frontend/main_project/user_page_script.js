
  // Очікування завантаження сторінки
  window.addEventListener('load', function() {
    // Отримання посилання на зображення
    var image = document.getElementById('rotating-image');
    
    // Додавання класу для початку анімації
    image.classList.add('rotate-image');

    // Очікування завершення анімації та відновлення початкового стану
    setTimeout(function() {
      image.classList.remove('rotate-image');
    }, 5000); // 5000 мс = 5 секунд
  });