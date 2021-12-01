/* Задание 1.
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.  */

let arr = [0, 174, undefined, 86, 0, null, 59, "I'm a student", 0.7, 28, "Skillfactory", 311, null, "Fronfend"];
function evenoddNum(arr){
let even = 0;
let odd = 0;
let nulls = 0;
let str = 0;
let zero = 0;

for(let i = 0; i < arr.length; i++){
    let x = arr[i];
    if(typeof x == 'number' && x % 2 == 0 && x != 0){
        even++;
    }else if(typeof x == 'number' && x % 2 != 0 && x != 0){
        odd++;
    }else if(typeof x == 'string'){
        str++;
    }else if(x == 0){
        zero++;
    }else if (x == null){
    		nulls++;
    }
  }
  
alert('Чётные числа - ' + even + '\nНечётные числа - ' + odd + '\nСтроки - ' + str + '\nНули - ' + zero + '\nNull/Undefined - ' + nulls);
}
evenoddNum(arr);
