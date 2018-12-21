function xo(str) {

  var stringx = 0;
  var stringo = 0;

  for (i=0; i<str.length; i++) {

    if( str[i] === 'x' ) {
      stringx ++;
    } else if ( str[i] === 'o' ) {
      stringo ++;
    }

  }

      if( stringx === stringo ) {
        return true;
      } else {
        return false;
      }

}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
