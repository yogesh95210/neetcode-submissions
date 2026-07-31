class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {

let binaryStr = n.toString(2).padStart(32, '0');  // "00000000000000000000000000010111"
let count=0
for (let i = 0; i < binaryStr.length; i++) {
   if(binaryStr[i]==="1"){
      count++
   }
}
return count
    }
}
