/* 1. Выведите числа от 1 до 50 и от 35 до 8. */

for(let a=1; a<=50; a++) {
    console.log(a);
}

for(let b=35; b>=8; b--) {
    console.log(b);
}


/* 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку. */

let c=89;
while(c>=11) {
    document.write(c + '<br/>');
    c--;
}

/* 3. С помощью цикла найдите сумму чисел от 0 до 100. */

let d = 100,
    sum = 0;

for(let i = 0; i <= d; i++) {
    console.log(i);
    sum +=i;
}
alert(sum);