module.exports = function toReadable (number) {
    let humanNumber;
    let arrSmallN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr20 = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTen = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  
    if(number < 10){
        humanNumber = arrSmallN[number];
    }else if(number > 10 && number < 20){
      humanNumber = arr20[number - 10];
    }else if(number >= 10 && number < 100 && number % 10 == 0){
        humanNumber = arrTen[number/10 - 1];
    }else if(number == 100){
        humanNumber = "one hundred";
    }else if(number > 20 && number < 100 && number % 10 != 0){
      humanNumber = arrTen[Math.floor(number/10 - 1)] + " "+ arrSmallN[number % 10];
    }else if(number > 100 && number < 1000 && number % 100 == 0){
        humanNumber = arrSmallN[number / 100] + " hundred";
    }else if(number > 100 && number < 1000 && number % 10 == 0){
        humanNumber = arrSmallN[Math.floor(number / 100)] + " hundred " + arrTen[Math.floor(number%100 / 10 -1)];
    }else if(number > 100 && number % 100 < 10 && number % 10 != 0){
        humanNumber = arrSmallN[Math.floor(number / 100)] + " hundred " +  arrSmallN[number % 10];
    }else if(number > 100 && number % 100 < 20 && number % 10 != 0){
      humanNumber = arrSmallN[Math.floor(number / 100)] + " hundred " + arr20[number % 100 - 10];
    }
    else if(number > 100 && number < 1000 && number % 100 != 0){
        humanNumber = arrSmallN[Math.floor(number / 100)] + " hundred " + arrTen[Math.floor(number%100 / 10 -1)] + " "+ arrSmallN[number % 10];
    }
    
    return humanNumber;
}


