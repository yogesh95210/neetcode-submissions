class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
         let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum right half mein hai
            left = mid + 1;
        } else {
            // Minimum mid ya left half mein hai
            right = mid;
        }
    }

    return nums[left];
    }
}
