class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(arr) {
    let n= arr.length
    for(let i=0;i<=n;i++){
        let found = false;

        for(let j=0 ; j<n; j++){
            if(arr[j]===i){
                found = true
                break;
            }
        }
        if(!found) return i
    }
    }
}
