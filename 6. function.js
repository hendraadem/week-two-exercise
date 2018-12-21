// 1

    function shoutOut(){
      return Halo Function!;
    }

    console.log( shoutOut() );

// 2

    function calculateMultiply(num1, num2) {
      return num1 * num2;
    }

    var num1 = 5;
    var num2 = 6;

    var hasilPerkalian = calculateMultiply(num1, num2)
    console.log( hasilPerkalian );


// 3

    function processSentence(name, age, address, hoby) {
      return 'Nama saya ' + name + ', Umur saya ' + age + ' tahun, ' + ' Alamat saya di ' + address + ', Hobi saya adalah ' + hoby
    }

    var name = "Agus";
    var age = 30;
    var address = "Jln. Malioboro, Yogjakarta";
    var hobby = "gaming";

    var fullSentence = processSentence(name,age,address,hobby);
    console.log(fullSentence);
