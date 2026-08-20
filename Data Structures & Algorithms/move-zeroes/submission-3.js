class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(arr) {
    let res= []
    let temp=[]
     for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
            res.push(arr[i])
        }else{
            temp.push(arr[i])
        }
     }
     const result= [...temp,...res]

      for(let i=0;i<arr.length;i++){
        arr[i]=result[i]
      }
    }
}
