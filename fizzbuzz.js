var numbers = [];
for (i=1;i<=20;i++){
    numbers[i] = i;
}
for (i=0;i<=numbers.length;i++){
    if((numbers[i] % 3 === 0) && (numbers[i] % 5 === 0)){numbers[i] = "FizzBuzz";}
    else if(numbers[i] % 5 === 0){numbers[i] = "Buzz";}
    else if(numbers[i] % 3 === 0){numbers[i] = "Fizz";}
}
console.log(numbers);