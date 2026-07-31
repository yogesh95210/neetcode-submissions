class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {
         let freqMap= new Map()
 for( let i=0; i<arr.length;i++){
    if(freqMap.has(arr[i])){
        freqMap.set(arr[i],freqMap.get(arr[i])+1)
    }else{
        freqMap.set(arr[i],1)
    }
 }
const sorted= [...freqMap.entries()].sort((a,b)=>b[1]-a[1])

 return sorted.slice(0,k).map(item=>item[0])
    }
}
