import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Working 9 to 5
    Write a function that calculates overtime and pay associated with overtime.

    Working 9 to 5: regular hours
    After 5pm is overtime
    Your function gets an array with 4 values:

    Start of working day, in decimal format, (24-hour day notation)
    End of working day. (Same format)
    Hourly rate
    Overtime multiplier
    Your function should spit out:

    $ + earned that day (rounded to the nearest hundreth)
    Examples
    overTime([9, 17, 30, 1.5]) ➞ "$240.00"
    overTime([16, 18, 30, 1.8]) ➞ "$84.00"
    overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
 */

function overTime(arr) {
  const startHour = arr[0];
  const endHour = arr[1];
  const hourlyPay = arr[2];
  const multiplier = arr[3];
  const totalHoursWorked = endHour - startHour;
  let normalPayHours = 17 - startHour;
  let overPayHours = endHour - 17;

  if (overPayHours <= 0) {
    normalPayHours = totalHoursWorked;
    overPayHours = 0;
  }

  if (normalPayHours <= 0) {
    overPayHours = totalHoursWorked;
    normalPayHours = 0;
  }

  return `$${(
    normalPayHours * hourlyPay +
    overPayHours * hourlyPay * multiplier
  ).toFixed(2)}`;
}

Test.assertEquals(overTime([9, 17, 30, 1.5]), "$240.00");
Test.assertEquals(overTime([9, 18, 40, 2]), "$400.00");
Test.assertEquals(overTime([13, 20, 32.5, 2]), "$325.00");
Test.assertEquals(overTime([9, 13, 25, 1.5]), "$100.00");
Test.assertEquals(overTime([11.5, 19, 40, 1.8]), "$364.00");
Test.assertEquals(overTime([10, 17, 30, 1.5]), "$210.00");
Test.assertEquals(overTime([10.5, 17, 32.25, 1.5]), "$209.63");
Test.assertEquals(overTime([16, 18, 30, 1.8]), "$84.00");
Test.assertEquals(overTime([18, 20, 32.5, 2]), "$130.00");
Test.assertEquals(overTime([13.25, 15, 30, 1.5]), "$52.50");
Test.assertEquals(overTime([13, 21, 38.6, 1.8]), "$432.32");
