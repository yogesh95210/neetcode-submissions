class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
   let maxProfit=0

   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let profit= arr[j]-arr[i]
          maxProfit= Math.max(profit,maxProfit)
    }
     
       }
        return maxProfit
}
}
