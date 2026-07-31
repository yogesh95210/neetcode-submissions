class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(arr) {
     
 let nonZeroIndex=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex]= arr[i]
            nonZeroIndex++
        }
    }

    while(nonZeroIndex<arr.length){
        arr[nonZeroIndex]=0
        nonZeroIndex++
    }
    return arr
    }
}
