class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
         let result=[]
    for (let i=0;i<arr.length-2;i++){
     for(let j=i+1;j<arr.length-1;j++){
       for(let k=j+1; k<arr.length;k++){
        if(arr[i]+arr[j]+arr[k]===0){
            let triplet= [arr[i],arr[j],arr[k]].sort((a,b)=>a-b)

            // avoid Duplicate 

            if(!result.some(r=> r[0]===triplet[0] &&r[1]===triplet[1]&&r[2]===triplet[2])){
                result.push(triplet)
            }
            
        }
       }
     }
    }
    return result
    }
}
