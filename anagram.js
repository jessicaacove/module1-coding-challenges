function anagramCounter (wordsArray) {
    var counter = 0;
      for(var i=0; i < wordsArray.length - 1; i++) {
        console.log(wordsArray[i]);
        for(var j=i+1; j<wordsArray.length; j++) {
          console.log(wordsArray[j]);
          if (wordsArray[i].length !== wordsArray[j].length) {}
          else {
            wordA = wordsArray[i].split('').sort().join('');
            console.log(wordA);
            wordB = wordsArray[j].split('').sort().join('');
            console.log(wordB);
            if(wordA === wordB) {
              counter ++;
              console.log(counter);
            }
          }
        }
      }

  return counter;
}
