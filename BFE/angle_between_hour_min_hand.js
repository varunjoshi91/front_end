// https://bigfrontend.dev/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

// https://github.com/kalpeshsingh/data-structure-agorithms-in-js/blob/master/132.md


/**
 * @param {string} time
 * @returns {number} 
 */
function angle(time) {
  // your code here
  const [hour, min] = time.split(':');

  const anglesInGivenHour = (360/12) * (hour % 12);
  const anglesInGivenMin = (360/60) * min;
  const surpassAngle = min / 2;

  const angleDifference = Math.abs(anglesInGivenHour + surpassAngle - anglesInGivenMin);
  const result = angleDifference > 180 ? 360 - angleDifference : angleDifference; 

  return Math.round(result);
}