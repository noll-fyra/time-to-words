const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles on the hour - 8:00", () => {
    const timeInWords = convertTimeToWords("8:00");
    expect(timeInWords).toBe("eight o'clock");
  });

  it("Handles times before 30 - 8:14", () => {
    const timeInWords = convertTimeToWords("8:14");
    expect(timeInWords).toBe("fourteen past eight");
  });

  it("Handles 15 minutes after - 8:15", () => {
    const timeInWords = convertTimeToWords("8:15");
    expect(timeInWords).toBe("quarter past eight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:44", () => {
    const timeInWords = convertTimeToWords("2:44");
    expect(timeInWords).toBe("sixteen to three");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles times at 40 mins - 2:40", () => {
    const timeInWords = convertTimeToWords("2:40");
    expect(timeInWords).toBe("twenty to three");
  });

  it("Handles times at 43 mins - 2:43", () => {
    const timeInWords = convertTimeToWords("2:43");
    expect(timeInWords).toBe("seventeen to three");
  });

  it("Handles times past 12 - 12:39", () => {
    const timeInWords = convertTimeToWords("12:39");
    expect(timeInWords).toBe("twenty one to one");
  });
});

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
