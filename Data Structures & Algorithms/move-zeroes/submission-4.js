class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(arr) {
        let pos= 0

        for(let i=0; i<arr.length; i++){
            if(arr[i]!==0){
                let temp= arr[pos]
                arr[pos]= arr[i]
                arr[i]= temp
                pos++
            }
        }
        return arr
    }
}
