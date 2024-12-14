function calculate() {
    let input = document.getElementById('numberInput').value;
    let numbers = input.split(',').map(num => parseInt(num.trim()));

    if (!checkInput(numbers)) return;

    let resultElement = document.getElementById('result');
    let a = numbers[0];
    let b = numbers[1];

    if (a >= 0 && b < -2) {
        resultElement.innerHTML = `Равенство справедливо для A ≥ 0 или B < -2 с A = ${a}, B = ${b};`;
    } else if (b < -2) {
        resultElement.innerHTML = `Равенство справедливо для B < -2 с B = ${b};`;
    } else if (a >= 0) {
        resultElement.innerHTML = `Равенство справедливо для A ≥ 0 с A = ${a};`;
    } else {
        resultElement.innerHTML = 'Ни одно равенство не справедливо';
    }
}

function checkInput(numbers) {
    if (numbers.length < 2) {
        document.getElementById('result').innerHTML = 'Пожалуйста, введите два числа';
        return false;
    }
    else if (numbers.length > 3) {
        document.getElementById('result').innerHTML = 'Введено более двух чисел';
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

