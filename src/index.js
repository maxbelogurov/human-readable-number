module.exports = function toReadable (number) {
  let singleNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tenNum = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let word;
  let n1 = String(number);
  let nEnd = Number(n1.substring(n1.length - 1));
  let n2End = Number(n1.substring(n1.length - 2, n1.length));
  console.log(n2End);
  if (number >= 0 && number <= 19) {
    return word = singleNum[number];
  } else if (number >= 20 && number <= 99) {
      if (number % 10 == 0) {
        return word = tenNum[number / 10 - 2];
      } else {
        return word = tenNum[Number(n1[0]) - 2] + ' ' + singleNum[Number(n1[1])];
      }
  } else if (number >= 100 && number <= 999) {
      if (number % 100 == 0) {
        return  word = singleNum[number / 100] + ' hundred';
      } else if (number % 10 == 0 && n2End >= 20) {
          return word = singleNum[ Math.floor(number / 100) ] + ' hundred ' + tenNum[n2End / 10 - 2];
      } else if (nEnd == 0 && n2End < 20) {
          return word = singleNum[ Math.floor(number / 100) ] + ' hundred ' + singleNum[n2End];
      } else if (nEnd == 0 && n2End >= 20) {
          return word = singleNum[ Math.floor(number / 100) ] + ' hundred ' + tenNum[Math.floor(n2End / 10) - 2];
      } else if (n2End > 20) {
          return word = singleNum[ Math.floor(number / 100) ] + ' hundred ' + tenNum[Math.floor(n2End / 10) - 2] + ' ' + singleNum[nEnd];
      } else {
          return word = singleNum[ Math.floor(number / 100) ] + ' hundred ' + singleNum[n2End];
      }
  }
}
