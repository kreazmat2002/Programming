function count() {
    let input = document.getElementById('numberInputTask2').value;
    let numbers = input.split(',').map(num => parseInt(num.trim()));
    document.getElementById('result_task2').innerHTML = numbers;

    if (!checkInput(numbers)) return;

    let quantityNegative = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) quantityNegative++;
    }
    document.getElementById('result_task2').innerHTML = `Количество положительных элементов = ${numbers.length - quantityNegative}<br>
    Количество  отрицательных элементов = ${quantityNegative}`
}

function checkInput(numbers) {
    if (numbers.length < 3) {
        document.getElementById('result_task2').innerHTML = 'Пожалуйста, введите три числа';
        return false;
    }
    else if (numbers.length > 4) {
        document.getElementById('result_task2').innerHTML = 'Введено более трёх чисел';
        return false;
    }
    return true
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

