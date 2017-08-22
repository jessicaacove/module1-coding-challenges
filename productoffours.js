function getFourInARow(numbers){
   var numbersArray = ("" + numbers).split("");
   for(var i=0; i< numbersArray.length; i++) {
     numbersArray[i] = parseInt(numbersArray[i], 10);
   }
   var productsArray = [];
   for(var i=0; i< numbersArray.length-3; i++) {
     var product = numbersArray[i] * numbersArray[i+1] * numbersArray[i+2] * numbersArray[i+3];
     productsArray.push(product);
   }
   var Max = Math.max(...productsArray);
   var sum = 0;

   productsArray.forEach((product) => {
     sum += product;
   });

   var Avg = Math.round(sum/productsArray.length *100)/100;

   return(Max - Avg);
}
