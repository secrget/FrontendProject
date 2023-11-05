// Function to create a snowflake and add it to the page
// Функція для створення сніжинки та її додавання до сторінки
// Функція для створення сніжинки та її додавання до сторінки
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";

  // Встановлюємо випадкове положення для сніжинки зверху сторінки
  const maxX = window.innerWidth;
  const randomX = Math.random() * maxX;
  snowflake.style.left = `${randomX}px`;
  snowflake.style.top = "-10%"; // Початкова позиція зверху

  // Додаємо сніжинку до розділу для сніжинок
  document.getElementById("snowfall").appendChild(snowflake);

  // Видаляємо сніжинку після того, як вона випаде за межі сторінки
  snowflake.addEventListener("animationiteration", () => {
    snowflake.remove();
  });
}

// Функція для створення падіння сніжинок
function createSnowfall() {
  setInterval(createSnowflake, 100); // Налаштуйте інтервал для створення сніжинок
}

// Починаємо ефект падаючих сніжинок
createSnowfall();