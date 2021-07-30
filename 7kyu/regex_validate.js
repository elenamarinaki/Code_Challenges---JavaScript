// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  let regexPin = /^(\d{4}|\d{6})$/;
  return pin.match(regexPin) != null;
}

validatePIN('12345');
// false

validatePIN('098765');
// true

validatePIN('.234');
// false
