class Solution:
    def searchInsert(self, arr: List[int], target: int) -> int:
        for i in range(len(arr)):
            if arr[i] >= target:
                return i
                
        return len(arr)
        