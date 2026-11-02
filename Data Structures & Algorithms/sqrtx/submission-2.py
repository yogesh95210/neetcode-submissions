class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
            
        left, right = 1, x // 2
        ans = 0
        
        while left <= right:
            mid = (left + right) // 2
            mid_squared = mid * mid
            
            if mid_squared == x:
                return mid
            elif mid_squared < x:
                ans = mid        # mid could be the potential truncated answer
                left = mid + 1   # look in the upper half
            else:
                right = mid - 1  # look in the lower half
                
        return ans
        