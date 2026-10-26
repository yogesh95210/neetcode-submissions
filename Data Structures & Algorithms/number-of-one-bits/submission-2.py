class Solution:
    def hammingWeight(self, n: int) -> int:
        binary_str = format(n, '032b')
        count = 0
        
        for i in range(len(binary_str)):
            if binary_str[i] == "1":
                count += 1
                
        return count
        