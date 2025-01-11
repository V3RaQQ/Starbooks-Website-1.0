document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");

    // Сначала черный экран должен быть виден
    intro.style.visibility = "visible";
    intro.style.opacity = "1";

    // Задержка для показа основного контента
    setTimeout(() => {
        intro.style.opacity = "0"; // Плавное исчезновение
        intro.style.visibility = "hidden"; // Скрыть после исчезновения
        mainContent.style.opacity = "1"; // Плавное появление
        mainContent.style.visibility = "visible"; // Сделать видимым
    }, 3000); // Время в миллисекундах, после которого показывается основная страница (3000мс = 3сек)
});
