/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
} // enum

const weekDay = {
  first: days.SATURDAY,
  second: days.SUNDAY,
}

function isWeekend(day: days): boolean {

  if (day === weekDay.first || day === weekDay.second) {
    return true;
   }
  return false;
}

console.log(isWeekend(days.MONDAY))
console.log(isWeekend(days.SUNDAY))   
console.log(isWeekend(days.THURSDAY))
console.log(isWeekend(days.SATURDAY))      

export {};