function calculate() {
    let input = document.getElementById('numberInputTask3').value;
    let x = parseInt(input.trim());

    if (!checkInput([x])) return;

    const a = 1.3;
    const b = 2.5;

    let result;
    if (x <= -2) {
        result = 2 * Math.pow(Math.cos(a * Math.pow(x, 2) - b), 2);
    } else if (x > 3) {
        result = 3 * Math.pow(x, 2) + b;
    } else {
        result = Math.sqrt(Math.pow(x, 2) + Math.pow(Math.E, a * x));
    }

    document.getElementById('result_task3').innerHTML = `Результат вычисления = ${result.toFixed(4)}`;
}

function checkInput(numbers) {
    if (numbers.length < 1 || isNaN(numbers[0])) {
        document.getElementById('result_task3').innerHTML = 'Пожалуйста введите число';
        return false;
    }
    else if (numbers.length > 1) {
        document.getElementById('result_task3').innerHTML = 'Введено более одного числа';
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

