class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(arr) {
         let freqMap= new Map()
 for( let i=0; i<arr.length;i++){
    if(freqMap.has(arr[i])){
        freqMap.set(arr[i],freqMap.get(arr[i])+1)
    }else{
        freqMap.set(arr[i],1)
    }
 }
let maxKey=[];
 let maxValue= Math.floor(arr.length/3)
 for (let [key,value] of freqMap){
    if(value> maxValue){
      //maxValue = value
      //maxKey= key
      maxKey.push(key)

    }
 }
return maxKey
    }
}
