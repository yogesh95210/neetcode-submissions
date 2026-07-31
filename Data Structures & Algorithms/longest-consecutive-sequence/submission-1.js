class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
        if(arr.length===0) return 0
         let longest=1
       for(let i=0; i<arr.length;i++){
        let current= arr[i]
        let count= 1

        while(linearSearch(arr,current+1)){
          current = current+1
          count= count +1
        }
        longest= Math.max(longest,count)
        }
     return longest
    }

}

 function linearSearch(arr,target){
         for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false
    }
