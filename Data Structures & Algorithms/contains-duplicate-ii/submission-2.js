class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(arr, k) {
        for( let i=0; i<arr.length-1;i++){
        for( let j=i+1; j<arr.length;j++){
            if(arr[i]===arr[j] && Math.abs(i-j) <= k){
                return true
            }
        }
    }
    return false
    }
}
