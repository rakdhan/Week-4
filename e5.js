function ubahHuruf(kata) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'
    let simpan = ''
    for (let j = 0; j < kata.length; j++) {
        for (let i = 0; i < alfabet.length; i++) {
            // console.log(alfabet[i])
            // console.log(kata[j])
            if (kata[j] === alfabet[i]) {
                simpan += alfabet[i+1]
            }
        }
        // console.log('==========')  
    }
    return simpan
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu