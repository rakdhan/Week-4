function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    result = ''
    for (let i = 0; i < kalimat.length; i++) {
      // for (let j = 0; j < kalimat.length; j++) {
      if (kalimat[i].toUpperCase() === kalimat[i]) {
        result += kalimat[i].toLowerCase()
        // kalimat[i] = kalimat.toLowerCase()
      }
      else if (kalimat[i].toLowerCase()=== kalimat[i]) {
        result += kalimat[i].toUpperCase()
      }
      // }
    }
    return result
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"