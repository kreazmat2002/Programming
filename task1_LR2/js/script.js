// Функция для события кнопки
function calculateCube() {
    // Получаем длину ребра куба
    let a = parseFloat(document.getElementById('edgeLength').value);

    // Проверка на допустимость значения
    if (isNaN(a) || a <= 0) {
        alert("Пожалуйста, введите допустимое положительное число");
        return;
    }

    // Вычисляем объем V и площадь поверхности S
    let V = Math.pow(a, 3);
    let S = 6 * Math.pow(a, 2);

    // Вывод результатов
    document.getElementById('outputVolume').textContent = `Объем куба (V): ${V}`;
    document.getElementById('outputSurfaceArea').textContent = `Площадь поверхности куба (S): ${S}`;
}
