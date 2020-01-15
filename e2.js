function fpb(angka1, angka2) {
    // STEP 1: Tentukan faktor apa saja yg membagi angka1 dan angka2!
    var apa = true
    result = []
    // console.log('fpAngka1: ')
    for (let i = 1; i < angka1; i++) { // 1 for bisa utk baca 1/ lebih parameter
        // console.log(i)
        if (angka1 % i === 0 && angka2 % i === 0) {
            // console.log(i)
            result.push(i)
        }
    }
    result = result[result.length-1]
    return result
  }
  // TEST CASES
  console.log(fpb(12, 16)); // 4 ==> (diantara 1, 2, 4. Maka fpb 'terbesar' adalah 4.)
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1