class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        freq_map = {}

        for num in nums:
            freq_map[num] = freq_map.get(num, 0) + 1

        for key, val in freq_map.items():
            if val == 1:
                return key
        