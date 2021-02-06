"use strict";

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const funTest = function() {

    let number = Math.floor(Math.random()*100);
    console.log(number);

    const funQuestion = function(){
        
        let answerOnQuestion = prompt('Угадай число от 1 до 100');
        
        if (answerOnQuestion === null){
            alert('Игра окончена');
            return;
        }else if (!isNumber(answerOnQuestion)) {
            alert('Введите число');
            funQuestion();
        }else if( answerOnQuestion > number){
            alert('Загаданное число меньше');
            funQuestion();
        } else if (answerOnQuestion < number) {
            alert('Загаданное число больше');
            funQuestion();
        }else {
            return alert('Вы угадали загаданное число');
        }
    };

    funQuestion();
}();

