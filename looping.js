// 1. looping while

      console.log('LOOPING PERTAMA');
      var num = 2;
      while ( num < 21 ) {
        console.log( num + ' - I Love Coding' );
        num ++;
      }

      console.log('LOOPING KEDUA');
      var num = 20;
      while ( num >= 2 ) {
        console.log( num + ' - I will become fullstack developer' );
        num --;
      }


// 2. looping for

      console.log('LOOPING PERTAMA');
      for ( var i = 1; i < 21; i++) {
        console.log(i + ' I Love Coding');
      }

      console.log('LOOPING KEDUA');
      for( var i = 20; i >= 1; i-- ) {
        console.log(i + ' - I will become fullstack developer ');
      }


// 3. ganjil genap

      for( var i = 1; i < 101; i++ ) {
        if ( i % 2 === 0 ) {
          console.log('counter sekarang ' + i);
          console.log('GENAP');
        } else {
          console.log('counter sekarang ' + i);
          console.log('GANJIL');
        }
      }

// 4. kelipatan

      for( var i = 1; i < 101; i += 1  ) {
        if ( i % 3 === 0) {
          console.log( i + ' kelipatan 3 ' );
        }
      }

      for( var i = 1; i < 101; i +=5  ) {
        if ( i % 6 === 0) {
          console.log( i + ' kelipatan 6 ' );
        }
      }

      for( var i = 1; i < 101; i +=9  ) {
        if ( i % 10 === 0) {
          console.log( i + ' kelipatan 10 ' );
        }
      }
