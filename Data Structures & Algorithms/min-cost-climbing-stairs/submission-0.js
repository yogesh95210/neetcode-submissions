class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
         let downOne = 0;
    let downTwo = 0;
    
    for (let i = 2; i <= cost.length; i++) {
        let currentCost = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
        downTwo = downOne;
        downOne = currentCost;
    }
    
    return downOne;

    }
}
