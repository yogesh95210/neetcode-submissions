class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
    let map = new Map();
    let result=[]

for(let i=0; i<nums.length;i++){
    map.set(i,nums[i])
    result.push(nums[i])
} 

for(let i=0; i<nums.length;i++){
    result.push(map.get(i))
}
return result
    }
}
