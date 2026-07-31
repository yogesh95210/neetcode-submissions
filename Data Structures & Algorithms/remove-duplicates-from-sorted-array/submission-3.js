class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
         if(arr.length===0) return 0
    let p=1
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[p-1]){
            arr[p]= arr[i]
            p++
        }
    }
    return p
    }
}
