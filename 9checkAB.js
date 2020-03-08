function checkAB(num) {
    // you can only write your code here!
    var posA
    var posB
    for (let i = 0; i < num.length; i++) {
        // console.log(num[i], i)
        if (num[i] === 'a') {
            posA = i
        }        
        else if (num[i]=== 'b') {
            posB = i
        }
    }
    console.log(posA, posB)
    var selisih = Math.abs(posA - posB) - 1
    if (selisih === 3) {
        return true
    }
    else{
        return false
    }
  
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false