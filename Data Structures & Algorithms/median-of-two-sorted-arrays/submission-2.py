class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m, n = len(nums1), len(nums2)
        total_len = m + n
        mid_idx = total_len // 2
        
        p1, p2 = 0, 0
        curr = prev = 0
        
        # Move pointers up to the median index
        for _ in range(mid_idx + 1):
            prev = curr
            if p1 < m and (p2 >= n or nums1[p1] <= nums2[p2]):
                curr = nums1[p1]
                p1 += 1
            else:
                curr = nums2[p2]
                p2 += 1
                
        # If odd, return the current middle element
        if total_len % 2 == 1:
            return float(curr)
        # If even, return the average of the two middle elements
        return (prev + curr) / 2.0
        