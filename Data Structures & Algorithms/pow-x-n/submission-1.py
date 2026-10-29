class Solution:
    def myPow(self, x: float, n: int) -> float:
         if n < 0:
            x = 1 / x
            n = -n
            
         result = 1
         current_product = x
        
         while n > 0:
            # If n is odd, multiply the current base into the result
            if n % 2 == 1:
                result *= current_product
            
            # Square the base and cut n in half
            current_product *= current_product
            n //= 2
            
         return result