class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l= 0
        let h= arr.length-1
        while(h>=l){
            let mid= Math.floor(l +(h-l)/2)
            if(arr[mid]===target){
                return mid
            }if(target> arr[mid]){
                l= mid+1
            }else{
                h=mid-1
            }
        }
        return -1
    }
}
