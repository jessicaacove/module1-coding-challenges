function getTotalSundays(yearInit, yearEnd) {

  var sundays = 0;

  var counter;
  var day;

  if(typeof yearEnd === "undefined") {
    if(yearInit === 2017) {
      sundays = 2;
    }
    else {
    sundays = getTotalSundays(yearInit, 2017) - getTotalSundays(yearInit + 1, 2017);
    }
  }
  else {

    if(yearInit > yearEnd) {
      return "Error. Provide an acceptable range."
    }
    else if (yearEnd < 2017) {
      sundays = getTotalSundays(yearInit, 2017) - getTotalSundays(yearEnd + 1, 2017);
    }
    else {

    for (var year = yearEnd; year >= yearInit; year --) {
        console.log("The year is " + year);

      // if (year % 4 === 0) {
      //   console.log("It's a leap year!!!");
      //   for (day = 366; day > 0; day --) {
      //     console.log("the day is " + day);

      //     if (counter < 7) {
      //       counter ++;
      //       console.log("Counter increased to " + counter);
      //     }
      //     else {
      //     counter = 1;
      //     console.log("Counter started over at " + counter);
      //     }

      //     if(counter === 1 && (day === 1 || day === 32 || day === 61 || day === 92 || day === 122 || day === 153 || day === 183 || day === 214 || day === 244 || day === 274 || day === 305 || day === 335)) {
      //       sundays ++;
      //       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      //       console.log("Sundays is now " + sundays);
      //     }
      //   }
      // }
      // else {
        for (day = 365; day > 0; day --) {
          console.log("the day is " + day);

          if (counter < 7) {
            counter ++;
            console.log("Counter increased to " + counter);
          }
          else {
          counter = 1;
          console.log("Counter started over at " + counter);
          }

          if(counter === 1 && (day === 1 || day === 32 || day === 60 || day === 91 || day === 121 || day === 152 || day === 182 || day === 213 || day === 244 || day === 274 || day === 305 || day === 335)) {
            sundays ++;
            console.log("Sundays is now " + sundays);
          }
        }
      // }
    }
  }
}
    return sundays;
}


// Jan 1
// Feb 32
// March 60
// April 91
// May 121
// June 152
// July 182
// August 213
// September 244
// October 274
// November 305
// December 335
