// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

class DatePro {
  constructor(dateAsString, inputDateFormat = "DD.MM.YYYY") {
    this.dateAsString = dateAsString;
    this.inputDateFormat = inputDateFormat;
    this.day = "";
    this.dayIndex;
    this.month = "";
    this.monthIndex;
    this.year = "";
    this.yearIndex;
  }

  format(outputStringFormat = "DD.MM.YYYY") {
    this.dayIndex = this.inputDateFormat.indexOf("D");
    this.day =
      this.dateAsString[this.dayIndex] +
      "" +
      this.dateAsString[this.dayIndex + 1];

    this.monthIndex = this.inputDateFormat.indexOf("M");
    this.month =
      this.dateAsString[this.monthIndex] +
      "" +
      this.dateAsString[this.monthIndex + 1];

    if (this.inputDateFormat.indexOf("Y") > -1) {
      this.yearIndex = this.inputDateFormat.indexOf("Y");
      this.year =
        this.dateAsString[this.yearIndex] +
        "" +
        this.dateAsString[this.yearIndex + 1];
    } else {
      this.year = new Date().getFullYear();
    }
    this.year.length < 3 ? (this.year = new Date().getFullYear()) : null;
    return outputStringFormat
      .replace("DD", this.day)
      .replace("MM", this.month)
      .replace("YYYY", this.year);
  }
}

// to powinno zadziałać:

const date1 = "23.03";
const formatDate1 = "DD.MM";
const instance1 = new DatePro(date1, formatDate1);

const date2 = "03/23/20";
const formatDate2 = "MM/DD/YY";
const instance2 = new DatePro(date2, formatDate2);

const date3 = "20-03-20";
const formatDate3 = "DD-MM-YYYY";
const instance3 = new DatePro(date3, formatDate3);

const one = instance1.format(); // '23.03.2020'
const two = instance2.format(); // '23.03.2020'
const three = instance3.format(); // '23.03.2020'
console.log(one);
console.log(two);
console.log(three);
