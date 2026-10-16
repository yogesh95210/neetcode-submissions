class Solution:
    def tribonacci(self, n: int) -> int:
          # Handle the base cases directly
        if n == 0:
            return 0
        if n == 1 or n == 2:
            return 1
            
        # Initialize variables for T0, T1, and T2
        t0, t1, t2 = 0, 1, 1
        
        # Iteratively calculate up to n using tuple unpacking
        for _ in range(3, n + 1):
            t0, t1, t2 = t1, t2, t0 + t1 + t2
            
        return t2
        