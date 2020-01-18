function urutkanAbjad(str) {
  // you can only write your code here!
  var result = str.split('')
  for (i = 0; i < result.length; i++) {
    for (j = i+1; j < result.length; j++) {
      if(result[i] > result[j]) {
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  // console.log(result)
 return result.join('') 
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'