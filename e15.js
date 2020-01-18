function highestScore (students) {
    // Code disini
    // var dataSiswa = {
        
    // }

    var obj = {}
   for (let i = 0; i < students.length; i++) {
    //    if (!obj.hasOwnProperty([students[i].class])){
        
       if (obj[students[i].class] === undefined){               //pengelompokkan kelas
        obj[students[i].class] = students[i]
       }

       else {                                                  //pengelompokan nilai 
           if (students[i].score > obj[students[i].class].score ) { 
            obj[students[i].class] = students[i]
           }
       }
    }

    for (let  k in obj) {
        delete obj[k].class       
    }

    return obj
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }


    // {
  //   foxes: { },
  //   wolves: { }
  // }
  
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}