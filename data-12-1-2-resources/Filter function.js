// Filter even numbers

Let numbers = [13.22, 36, 54, 55]
let evenNumber = numbers.filter(number => number % 2 == 0 )

// larger number return
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// Filter words with S
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander']
var sWords = words.filter(word => word.startsWith = s)