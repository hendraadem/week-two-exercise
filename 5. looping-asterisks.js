
// 1.
      var row = 5;
      for ( i = 0; i < row; i++ ) {
        console.log('*')
      }

// 2.

      var string  = ''

      // perulangan kolom
      for( i=0; i<6; i++ ) {

        // perulangan baris
        for( j=0; j<6; j++ ){
          string += '*'
        }

        // pindah kolom ke bawah
        string += '\n'

      }

      console.log(string)

// 3.


      var string  = ''

      for( i=0; i<6; i++ ) {

        for( j=0; j<i; j++ ){
          string += '*'
        }

        string += '\n'

      }

      console.log(string)
