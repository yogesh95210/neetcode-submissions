class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const sorted= nums.sort((a,b)=> a-b)
        let res= 1
        let count= 1
        for(let i=0;i<sorted.length-1;i++){
           if(sorted[i + 1] === sorted[i] + 1){
             count++
           }else if(sorted[i + 1] === sorted[i]){
            continue;
           }else{
            count=1
           }
             res= Math.max(res,count)
           }
     return res    
    }
}
