class Solution:
    def containsNearbyDuplicate(self, arr: List[int], k: int) -> bool:
        for i in range(len(arr) - 1):
            for j in range(i + 1, len(arr)):
                if arr[i] == arr[j] and abs(i - j) <= k:
                    return True
        return False
        
        