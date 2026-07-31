class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(arr, target) {
        let low= 0;
        let high= arr.length-1
        while(high>=low){
            let mid= Math.floor(low+(high-low)/2) 
            if(arr[mid]===target){
                return mid
            }
             if(arr[mid]<target){
                low= mid+1
            }
            else{
               high= mid-1
            }
            
        }
        return low
        
    }
}
