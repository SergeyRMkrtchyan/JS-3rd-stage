// finding prime numbers 
// for random number of entries:
// https://jsbin.com/dusumexiye/2/edit?js,output

function isPrime(a, b, c, d, e, f){
    var numbers = Array.from(arguments);
    for(var i = 0; i<numbers.length; i++){
      if(numbers[i] === 1)
         numbers.splice(i, 1);                  //1 is not a prime number
      for(var l = 2; l < numbers[i]; l++){
        if(numbers[i]%l == 0 ){
          numbers.splice(i, 1);
        } 
      }
    }
    console.log(numbers);
  }
    
  isPrime(1, 4, 5, 6, 7, 10);
  isPrime(15, 24, 3, 85, 2, 1, 8);