class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        arr = sorted(nums1 + nums2)
        
        n = len(arr)

        if n % 2 == 1:
            return float(arr[n // 2])
        
        mid = n // 2
        return (arr[mid - 1] + arr[mid]) / 2.0
        