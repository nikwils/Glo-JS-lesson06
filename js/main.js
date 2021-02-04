"use strict";
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};




const funQuestion = function() {

    let question = +prompt('Угадай число от 1 до 100');

    let requiredNumber = 17;   
    
        const guessNumber = function() {

              if(!isNumber(question)){
                alert('Введите число!');
                funQuestion();
            } else if(question > 100) {
                alert('Загаданное число меньше');
                funQuestion();
            } else if (question < +1) {
                alert('Загаданное число больше');
                funQuestion();
            }else {
                alert('Выберите другое число');
                funQuestion();
            }
        };
        if (question === null) {
            alert('Игра окончена!');
            return;
          } else if(question == requiredNumber){
            alert('Поздравляю, Вы угадали!!!');
            return question;
        } else {
        return guessNumber();
    }
};

console.log(funQuestion());