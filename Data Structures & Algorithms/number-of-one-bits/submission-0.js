class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count=0
         for(let i=0;i<32;i++){
           let bit =(n>>i) &1
            if(bit===1){
                count++
            }      
         }
         return count
    }
}
