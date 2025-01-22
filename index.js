// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // split time into hour and minutes > [h,m]
  function splitTime(time) {
    return time.split(":");
  }

  // convert hour from number to text
  function convertTimeIntoText(time) {
    switch (parseInt(time)) {
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      case 7:
        return "seven";
      case 8:
        return "eight";
      case 9:
        return "nine";
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
      case 20:
        return "twenty";
      case 21:
        return "twenty one";
      case 22:
        return "twenty two";
      case 23:
        return "twenty three";
      case 24:
        return "twenty four";
      case 25:
        return "twenty five";
      case 26:
        return "twenty six";
      case 27:
        return "twenty seven";
      case 28:
        return "twenty eight";
      case 29:
        return "twenty nine";
      // case 30:
      //   return "thirty";
      // case 40:
      //   return "forty";
      // case 50:
      //   return "fifty";
      default:
        return "";
    }
  }

  const [hour, minutes] = splitTime(time);

  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  if (minutes === "00") {
    return convertTimeIntoText(hour) + " o'clock";
  }

  if (minutes === "15") {
    return "quarter past " + convertTimeIntoText(hour);
  }

  if (minutes === "30") {
    return "half past " + convertTimeIntoText(hour);
  }

  if (minutes === "45") {
    return "quarter to " + convertTimeIntoText((parseInt(hour) % 12) + 1);
  }

  if (parseInt(minutes) >= 0 && parseInt(minutes) <= 29) {
    return convertTimeIntoText(minutes) + " past " + convertTimeIntoText(hour);
  }

  if (parseInt(minutes) >= 31 && parseInt(minutes) <= 59) {
    return (
      convertTimeIntoText(60 - parseInt(minutes)) +
      " to " +
      convertTimeIntoText((parseInt(hour) % 12) + 1)
    );
  }

  // if (time) return "half past eight";
}

convertTimeToWords("8:14");

// '0:00' > 'midnight'
// '12:00' > 'midday'
// '2:00' > 'two o'clock'
// '2:03' > 'three past two'
// '2:11' > 'eleven past two'
// '2:15' > 'quarter past two'
// '2:30' > 'half past two'
// '2:33' > 'twenty seven to three'
// '2:40' > 'twenty to three'
// '2:45' > 'quarter to three'
// '2:55' > 'five to three'

module.exports = { convertTimeToWords };
