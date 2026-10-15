class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
         down_one = 0
         down_two = 0
        
         for i in range(2, len(cost) + 1):
            current_cost = min(down_one + cost[i - 1], down_two + cost[i - 2])
            down_two = down_one
            down_one = current_cost
            
         return down_one
        