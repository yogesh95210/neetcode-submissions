class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let maxProfit=0
        let buy=0
        let sell= 1
    while(sell<arr.length){
       if(arr[sell]>arr[buy]){
        let profit= arr[sell]- arr[buy]
        maxProfit= Math.max(profit,maxProfit)
       }else{
        buy= sell
       }
       sell++

      }
    return maxProfit
}


}
