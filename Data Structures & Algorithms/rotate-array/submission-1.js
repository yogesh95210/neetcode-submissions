class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(arr, k) {
        const n= arr.length
            k= k%n
        while(k>0){
            const temp=arr[n-1]
        for( let i= n-1;i>0;i--){
            arr[i]=arr[i-1]
            }
            arr[0]=temp
        k--
        }
        return arr
    }
}
