class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(arr, k) {
        let map = new Map()
   for (let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
       map.set(arr[i], map.get(arr[i])+1)
    }else(
        map.set(arr[i],1)
    )
   }
    let sorted= [...map].sort((a,b)=>b[1]-a[1])
   let res= []
   for(let i=0;i<k;i++){
    res.push(sorted[i][0])
   }
   return res
    }
}
