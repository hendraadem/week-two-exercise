function konversiMenit (menit) {

  hasilMenit   = Math.floor( menit / 60 );
  hasilDetik = menit % 60;

  if( hasilDetik < 10 ) {
    hasilDetik = '0' + hasilDetik
  }

  return hasilMenit + ' : ' + hasilDetik;
}


console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
