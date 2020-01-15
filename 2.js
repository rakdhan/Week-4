/**
 * Function createMatrix menerima input berupa sebuah angka n dan akan mereturn sebuah matrix berisi angka-angka dari
 * n^2 sampai dengan 1. (Jika n =3 maka dia akan memperlihatkan matrix berisi angka-angka dari 9 sampai 1)
 *
 * Namun, matrix di row yang ganjil akan berisi bintang dan bukan angka (jika index dimulai dari 0). Lihat contoh input dan output
 * untuk detail lebih jelasnya.
 * Implementasikan function tersebut!
 *
 * Rules:
 * - Dilarang menggunakan built-in function .map .reduce .indexOf .lastIndexOf 
 *
 *
 * Contoh Input dan Output
 * Input: 3
 * Output:
 * [[9, 8, 7]
 * [*, *, *]
 * [3, 2, 1]]
 *
 *
 * Input: 2
 * Output:
 * [[4,3],
 *  [*,*]]
 *
 */

function createMatrix(n) {
  // your code here
  var result = []
  var count = n*n
  for (let i = 0; i < n; i++) {
    var simpan = []
    
    for (let j = 0; j < n; j++) {
      if (i % 2 !== 0) {
        simpan.push('*')
      }
      else{
        simpan.push(count)
      }
      count--
      // simpan.push(count)
    }
   
    result.push(simpan)
  }
  return result
}

console.log(createMatrix(2));
/**
 * [ [ 4, 3 ], [ '*', '*' ] ]
 */

console.log(createMatrix(4));
/**
 * [
  [ 16, 15, 14, 13 ],
  [ '*', '*', '*', '*' ],
  [ 8, 7, 6, 5 ],
  [ '*', '*', '*', '*' ]
]
 * 
 */

console.log(createMatrix(5));
/**
 * 
 * [
  [ 25, 24, 23, 22, 21 ],
  [ '*', '*', '*', '*', '*' ],
  [ 15, 14, 13, 12, 11 ],
  [ '*', '*', '*', '*', '*' ],
  [ 5, 4, 3, 2, 1 ]
]
 */
