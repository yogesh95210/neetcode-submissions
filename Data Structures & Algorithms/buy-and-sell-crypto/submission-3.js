class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(arr) {
        let maxProfit=0
    let buy=0
    while(buy<arr.length){
    for(let sell=buy;sell<arr.length;sell++){
        let profit= arr[sell]-arr[buy]
        if(profit>maxProfit){
            maxProfit= profit
        }
    }
    buy++
}
    return maxProfit
}


}
