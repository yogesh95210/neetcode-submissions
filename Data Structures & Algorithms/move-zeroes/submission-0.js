class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
          let result=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            result.push(nums[i])
        }
    }
    let zeroCount= nums.length- result.length
        for(let i=0 ; i<zeroCount; i++){
            result.push(0)
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = result[i];
        }

    }
}
