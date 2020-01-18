function digitPerkalianMinimum(angka) {
  // you can only write your code here!

  var temp = []
  for (let i = 1; i <= angka; i++) {
    var result = angka / i
    var strResult = String(i) + String(result)
    if (result % 1 === 0) {
      temp.push(strResult)
    }
  }
  var hasilAkhir = temp[0].length;
  // console.log(temp[0].length)
  for (j = 0; j < temp.length; j++) {
   if(temp[j].length < hasilAkhir) {
     hasilAkhir = temp[j].length
    }
  }
  // console.log(hasilAkhir)
  return hasilAkhir 
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2