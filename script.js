function showDetails(detailsId) {
    // Скрыть все детали и убрать класс active со всех правых контейнеров
    document.querySelectorAll('.details').forEach(details => {
        details.style.display = 'none';
        details.parentElement.classList.remove('active');
    });

    // Показать детали и добавить класс active к выбранному правому контейнеру
    const details = document.getElementById(detailsId);
    details.style.display = 'block';
    details.parentElement.classList.add('active');
}

function hideDetails(detailsId) {
    // Скрыть детали и убрать класс active с выбранного правого контейнера
    const details = document.getElementById(detailsId);
    details.style.display = 'none';
    details.parentElement.classList.remove('active');
}
