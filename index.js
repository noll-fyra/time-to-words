// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // split time into hour and minutes > [h,m]
  function splitTime(timestring) {
    return timestring.split(":");
  }

  // convert time from number to text
  function convertTimeIntoText(timestring) {
    switch (parseInt(timestring, 10)) {
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
        return "quarter";
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
      case 30:
        return "half";
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

  // exact hour > [hour] o'clock
  if (minutes === "00") {
    return convertTimeIntoText(hour) + " o'clock";
  }

  // less than 30 minutes > [minutes] past [hour]
  // special case for 15 minutes - use "quarter"
  if (parseInt(minutes) <= 30) {
    return (
      convertTimeIntoText(minutes) +
      " past " +
      convertTimeIntoText(parseInt(hour) % 12)
    );
  }

  // more than 30 minutes > [minutes] to [hour]
  // special case for 45 minutes - use "quarter"
  if (parseInt(minutes) >= 31) {
    return (
      convertTimeIntoText(60 - parseInt(minutes)) +
      " to " +
      convertTimeIntoText((parseInt(hour) % 12) + 1)
    );
  }

  // if all scenarios fail, return empty string
  return "";
}

module.exports = { convertTimeToWords };
