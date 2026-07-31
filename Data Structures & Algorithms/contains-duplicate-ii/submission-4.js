class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(arr, k) {
        let set = new Set()
    let i=0
     for(let j=0;j<arr.length;j++){
        if(set.has(arr[j])){
            return true
        }
        set.add(arr[j])
        
        if( j-i>=k){
         set.delete(arr[i]) 
         i++
            }
        
     }
        return false

    }
}
