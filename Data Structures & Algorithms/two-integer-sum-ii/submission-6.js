class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let firstIndex=0
        let secondIndex=numbers.length-1
        while(firstIndex<secondIndex){
            let sum= numbers[firstIndex]+ numbers[secondIndex];
            if(sum===target){
                return [firstIndex+1, secondIndex+1]
            }else if(sum<target){
                firstIndex++
            }else{
                secondIndex--
            }
        }
           }
}
