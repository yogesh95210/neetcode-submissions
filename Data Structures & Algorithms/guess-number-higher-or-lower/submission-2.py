# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        # 1. Define the helper function inside guessNumber
        def binary_search(l: int, r: int) -> int:
            if l > r:
                return -1
                    
            mid = (l + r) // 2
            res = guess(mid)
            
            if res == 0:
                return mid
            elif res == -1:
                return binary_search(l, mid - 1)
            else:
                return binary_search(mid + 1, r)
                
        # 2. Kick off the recursion starting from 1 to n
        return binary_search(1, n)