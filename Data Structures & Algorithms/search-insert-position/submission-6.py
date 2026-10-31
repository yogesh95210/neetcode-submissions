class Solution:
    def searchInsert(self, arr: List[int], target: int) -> int:
        low = 0
        high = len(arr) - 1
        
        while high >= low:
            mid = low + (high - low) // 2
            
            if arr[mid] == target:
                return mid
            if arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
                
        return low
        