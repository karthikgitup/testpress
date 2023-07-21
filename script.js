
//--------1----------------------//


function reverseString(str){

var strlen=str.length;
var reverse="";
for(var i=strlen-1;i>=0;i--){
    reverse +=str.charAt(i);
   
    }

return reverse;

}
const input=prompt("Enter the words")

const reverseoutput=reverseString(input);
console.log(input,reverseoutput);


//-----------2---------------------------//


function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
 
  const inputnum = parseInt(prompt("Enter a number:"));
  const isPrimenum = isPrime(inputnum);
  if (isPrimenum) {
    console.log(inputnum + " is a prime number.");
  } else {
    console.log(inputnum + " is not a prime number.");
  }


//--------------------3-------------------//

const arr=[54, 546, 548, 60];
const arr_len=arr.length;
var numarr="";
for(i=arr_len-1;i>=0;i--){
    numarr+=arr[i];

}
console.log(numarr);


//------------4--------------------------//



function reverseNumber(number) {
    let reversedNumber = 0;
  
    while (number !== 0) {
      reversedNumber = (reversedNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
  
    return reversedNumber;
  }
  
  const number = 988;
  const reversedNumber = reverseNumber(number);
  console.log("Reversed number:", reversedNumber);

//-----------------------------5----------------------------------//


const numbers = [54, 546, 548, 60];

const maxi = Math.max(...numbers);
const min= Math.min(...numbers);

console.log("Maximum:", maxi);
console.log("Minimum:", min);
  