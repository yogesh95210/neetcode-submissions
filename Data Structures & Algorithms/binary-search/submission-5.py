class Solution:
    def search(self, arr: List[int], target: int) -> int:
         low = 0
         high = len(arr) - 1
        
        # Define the helper function inside the main function
         def recursive(arr, target, low, high):
            if high >= low:
                mid = low + (high - low) // 2
                
                if arr[mid] == target:
                    return mid
                if target > arr[mid]:
                    return recursive(arr, target, mid + 1, high)
                
                return recursive(arr, target, low, mid - 1)
            
            return -1

         return recursive(arr, target, low, high)
        