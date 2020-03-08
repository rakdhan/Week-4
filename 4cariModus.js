function cariModus(arr) {

    var frequency = 0
    var result = []
      for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) {
                frequency++
                result.push(arr[i])
            }
            console.log(arr[i], arr[j], i !== j, frequency)
        }
      }
      if (frequency === 0) {
        return -1
      }
      else if (frequency >= arr.length) {
          return -1
      }
    return result[0]
    }
    
      
      
      // TEST CASES
      console.log(cariModus([10, 4, 5, 2, 4])); // 4
    //   console.log(cariModus([5, 10, 10, 6, 5])); // 5
    //   console.log(cariModus([10, 3, 1, 2, 5])); // -1
    //   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
    //   console.log(cariModus([7, 7, 7, 7, 7])); // -1