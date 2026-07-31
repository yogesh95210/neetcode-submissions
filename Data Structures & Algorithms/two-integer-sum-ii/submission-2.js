class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(arr, target) {
        let fIndex=0;
        let sIndex=0;

        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]==target){
                    fIndex=i+1
                    sIndex=j+1
                    break;
                }
            }
        }
        return [fIndex,sIndex]
    }



}
