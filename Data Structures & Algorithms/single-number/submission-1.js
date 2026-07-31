class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(arr) {
        for(let i=0; i<arr.length;i++){
    let count= 0
    for(let j=0; j<arr.length;j++){
        if(arr[i]==arr[j]){
          count++
        }
    }
   // console.log(`Element: ${arr[i]} → count: ${count}`);
    if (count === 1) {
            return arr[i];
        }
}
    }
}
