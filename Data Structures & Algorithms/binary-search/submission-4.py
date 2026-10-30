class Solution:
    def search(self, arr: List[int], target: int) -> int:
        l = 0
        h = len(arr) - 1
        
        while h >= l:
            mid = l + (h - l) // 2
            
            if arr[mid] == target:
                return mid
            elif target > arr[mid]:
                l = mid + 1
            else:
                h = mid - 1
                
        return -1
        