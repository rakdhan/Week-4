function changeMe(arr) {
  // you can only write your code here!
    var tahun = 2020

    for (let i = 0; i < arr.length; i++) {
        console.log((i+1) + '. ' + arr[i][0] + arr[i][1] +':')
        var obj = {}
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        obj.age = tahun - arr[i][3]
        if (isNaN(obj.age) || obj.age === undefined || obj.age === null || tahun < arr[i][3]) {
            obj.age = 'Invalid Birth Year'
        }
        console.log(obj)
    }
    if (arr.length === 0) {
        console.log('""')
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
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