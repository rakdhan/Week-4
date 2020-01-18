function changeMe(arr) {
  if (arr.length === 0) {
    return ''
  }

  for (let i = 0; i < arr.length; i++) {

    console.log(i+1 + '. ' + arr[i][0] + ' ' + arr [i][1] + ':')
    var object= {}
    object.firstName = arr[i][0]
    object.lastName = arr[i][1]
    object.gender = arr[i][2]
    object.age = 2020 - arr[i][3]

    if (arr[i][3] === undefined ) {
      object.age = 'Invalid Birth Year'
    }
    console.log(object)
    
  }
    // var p = {
    //     firstName: 'Christ',
    //     lastName : 'Evans',
    //     gender   : 'Male',
    //     age      : 2020 - 1982 
    //     };
    // console.log(person)
// console.log(arr[0])
// console.log(arr[i])
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""