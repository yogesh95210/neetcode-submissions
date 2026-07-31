class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let low= 0;
  let high= arr.length-1
    function recursive(arr,target,low,high){

        if(high>=low){
        let mid=Math.floor(low +(high-low)/2)
        if(arr[mid]===target){
            return mid
        }
        if(target>arr[mid]){
            return recursive(arr,target,mid+1,high)
        }
            return recursive(arr,target,low,mid-1)
    }
    return -1
    }
     return recursive(arr,target,low,high)
    }
}
