/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
    if (exponent < 0) {
     throw error = "exponent should be >= 0";
   } else if (exponent === 0) {
     return 1;
   } else {
     return base * power(base, exponent - 1);
   }
}

module.exports = power;
