function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = []
    for (let i = 0; i < angka; i++) {
        var faktorPerkalian = angka / i
        // console.log(faktorPerkalian)
        if (angka % i === 0) {
            temp.push(i.toString() + faktorPerkalian)
        }
    }
    //sort buat ambil temp index paling awal
    for (let j = 0; j < temp.length; j++) {
        for (let k = j+1; k < temp.length; k++) {
            if (temp[j] < temp[k]) {
                let singgah = temp[j]
                temp[j] = temp[k]
                temp[k] = singgah
            }            
        }        
        var result = temp[0].length
    }
    if (angka < 10 && angka % 2 !== 0 && angka % 3 !== 0) {
        return 2
    }
    return result

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

