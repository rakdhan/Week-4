/**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 * 
 * 
 *  ========== PSEUDOCODE =========
 * 
 * FUNCTION getStudents with parameters of grades and names
  * IF grades.length equal to 0
  * return 'grades should not be empty'
  * ENDIF
  * ELSE IF names.length equal to 0
  * return 'student name should not be empty'
  * ELSE
    *  STORE result as an array
    *  STORE jumlah with any number
    *  STORE rata2 with any number
    *  STORE tampung as an array
    *  FOR i=0 and i less than grades.length
    *    jumlah += grades[i]
    *  ENDFOR
    *    rata2 = jumlah / grades.length
    *  FOR i = 0 and i less than grades.length
    *    push [names[i], grades[i]] to tampung
    *  ENDFOR
    *  FOR j = 0 and j less than tampung.length
      *    IF tampung[j][1] greater than rata2
      *      push tampung[j][0] to result
      *    ENDIF
    *  ENDFOR
    *  DISPLAY result
  * ENDELSE
 * ENDFUNCTION
 */


function getStudents(grades, names) {
  // Your Code here

  if (grades.length === 0) {
   return 'grades should not be empty' 
  }
  else if (names.length === 0 ) {
    return 'student name should not be empty'
  }
  else{
    var result = []
    var jumlah = 0
    var rata2 = 0
    for (let i = 0; i < grades.length; i++) {
      jumlah += grades[i]
    }
    // console.log(jumlah)
    rata2 = jumlah / grades.length
    // console.log(rata2)
    var tampung=[]
    for (let i = 0; i < grades.length; i++) {
      tampung.push([names[i], grades[i]])
    }
    // console.log(tampung)
    for (let j = 0; j < tampung.length; j++) {
      if (tampung[j][1] > rata2 ) {
        result.push(tampung[j][0])
      }
    }
    return result

    
  }
}

var grades1 = [10, 9, 8, 7, 6, 8];
var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
console.log(getStudents(grades1, studentNames1));
// [ 'Tony', 'Tifa' ]

var grades2 = [3, 9, 4, 6];
var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
console.log(getStudents(grades2, studentNames2));
// [ 'Rama', 'Fauzan' ]

var grades3 = [];
var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
console.log(getStudents(grades3, studentNames3));
// grades should not be empty

var grades4 = [5, 3, 2, 10, 5];
var studentNames4 = [];
console.log(getStudents(grades4, studentNames4));
// student name should not be empty

