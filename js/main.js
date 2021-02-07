"use strict";

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function funTest() {

    let number = Math.floor(Math.random()*100);
    console.log(number);
   
    let attempts = 10;

    const funQuestion = function(){

        if(attempts > 0 ) {
            let answerOnQuestion = prompt('Угадай число от 1 до 100');
        
        if (answerOnQuestion === null){
            alert('Игра окончена');
            return;
        }else if (!isNumber(answerOnQuestion)) {
            alert('Введите число');
            funQuestion();
        }else if( answerOnQuestion > number){
            attempts --;
            alert(`Загаданное число меньше, осталось попыток ${attempts}`);
            funQuestion();
        }else if (answerOnQuestion < number) {
            attempts --;
            alert(`Загаданное число больше, осталось попыток ${attempts}`);
            funQuestion();
        }else {
            let b = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (b === true) {
                funTest();
            } else {
                return;
            }
        }
        } else {
            let a = confirm('Попытки закончились, хотите сыграть еще? ');
            if (a === true) {
                funTest();
            } else {
                return;
            }
        }
    };

    funQuestion();
};
funTest();
