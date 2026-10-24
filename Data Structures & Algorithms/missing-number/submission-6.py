class Solution:
    def missingNumber(self, nums: List[int]) -> int:
         n = len(nums)
         # Use integer division (//) to avoid float conversion
         total_sum = (n * (n + 1)) // 2
         actual_sum = sum(nums)

         return total_sum - actual_sum
        