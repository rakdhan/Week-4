function urutkanAbjad(str) {
    // you can only write your code here!
    //assign index
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    var temp = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alfabet.length; j++) {
            if (str[i] === alfabet[j]) {
                str[i] = j
                temp.push([str[i], j])
            }
        }     
    }
    //sorting
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (temp[i][1] < temp[j][1]) {
                let singgah = temp[i]
                temp[i] = temp[j]
                temp[j] = singgah
            }            
        }    
    }
    //tampilkan hurufnya saja setelah di sorting
    var final = ''
    for (let k = 0; k < temp.length; k++) {
        final += temp[k][0]      
    }
    return final
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'

