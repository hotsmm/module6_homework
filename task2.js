/* Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.  */

function primeNum(a) {
  let primeNum;
  if (typeof a == 'number' && !isNaN(a)) {
    if (a <= 1000) {
      for (let i = 2; i < 10; i++) {
        if (a % i != 0 && a != i) {
          primeNum = true;
        } else if (a != i) {
          primeNum = false;
          return 'Это составное число';
        }
      }
      if (primeNum == true) {
        return 'Это простое число';
      }
    } else {
      return 'Число больше 1000';
    }
  } else {
    return 'Это не число';
  }
}
number = +prompt('Введите число:');
alert(primeNum(number));

