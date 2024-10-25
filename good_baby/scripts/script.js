let a = prompt("Введите длину ребра куба a:");

a = parseFloat(a);

let V = Math.pow(a, 3);
let S = 6 * Math.pow(a, 2);;

alert(`Объём куба V = ${V} \nПлощадь сторон S =  ${S}`);

