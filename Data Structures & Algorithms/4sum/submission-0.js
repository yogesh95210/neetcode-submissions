class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(arr, target) {
         let result=[]
    for (let i=0;i<arr.length-3;i++){
     for(let j=i+1;j<arr.length-2;j++){
       for(let k=j+1; k<arr.length-1;k++){
         for(let l=k+1; l<arr.length;l++){
             if(arr[i]+arr[j]+arr[k]+arr[l]===target){
            let triplet= [arr[i],arr[j],arr[k],arr[l]].sort((a,b)=>a-b)
            // avoid Duplicate 
            if(!result.some(r=> r[0]===triplet[0] &&r[1]===triplet[1]&&r[2]===triplet[2]&& r[3]===triplet[3])){
                result.push(triplet)
            }
        }
         }
       
       }
     }
    }
    return result
    }
}
