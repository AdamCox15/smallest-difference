// Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

function smallestDifference(arr1, arr2){
    if(arr1.length === 0 || arr2.length === 0){ return -1; }
  
    let result = Number.MAX_SAFE_INTEGER; // (2^53) - 1
    // 9007199254740991
  
    for(let i = 0; i < arr1.length; i++){
      for(let j = 0; j < arr2.length; j++){
        //Math.abs meaning return the positive not negative
        if(Math.abs(arr1[i] - arr2[j]) < result){
          result = Math.abs(arr1[i] - arr2[j]);
        }
      }
    }
    return result;
  }
  
  console.log(smallestDifference([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]))

  //--------------------------------------------------------------------------