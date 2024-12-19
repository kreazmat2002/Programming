const bgMusicButton = document.getElementById('bgMusicButton');
const bgAudio = new Audio("./audio/videoplayback.mp3");
let isMusicPlaying = false;


if (bgMusicButton && bgAudio) {
    bgMusicButton.addEventListener('click', function () {
        if (isMusicPlaying) {
            bgAudio.pause();
        } else {
            bgAudio.play();
        }
        isMusicPlaying = !isMusicPlaying;
    });
} else {
    console.error("Ошибка: Элементы bgMusicButton или bgAudio не найдены.");
}

function sweet() { 
    let price = parseInt(document.getElementById('price').value); 
     
    for (let index = 0.1; index <= 1; index += 0.1) { 
        document.getElementById('result-price').innerHTML += `Стоимость конфет весом ${index.toFixed(1)}: ${(index * price).toFixed(1)}<br>`; 
    } 
}


function calculate() {
    let size_array = parseInt(document.getElementById('number-size').value);
    let compostion = 1;

    array = [];

    for (let index = 0; index < size_array; index++) {
        array[index] = (Math.random() * 100).toFixed(2);
    }

    for (let index = 0; index < array.length; index++) {
        array[index] = (Number(array[index]) - Math.floor(Number(array[index]))).toFixed(2);

        console.log(`Элемент массива №${index + 1}: ${array[index]}`);
        document.getElementById('result-text').innerHTML += `Элемент массива №${index + 1}: ${array[index]}<br>`;

        compostion *= array[index];
    }

    console.log('Произведение всех дробных частей = ' + compostion);
    document.getElementById('result-text').innerHTML += '<p>Произведение всех дробных частей = ' + compostion + '</p>';
}


