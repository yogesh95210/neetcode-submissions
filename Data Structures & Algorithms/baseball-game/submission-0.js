class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(arr) {
         let temp=[]
     for(let i=0;i<arr.length;i++){
          if(arr[i]==="D"){
               //temp[i-1]= temp[i-1] *2
             temp.push(Number(temp[temp.length-1]) *2)
          }else if(arr[i]==="+"){
                temp.push(Number(temp[temp.length-1]) +Number(temp[temp.length-2]))
          }else if(arr[i]==="C"){
               temp.pop()
          }else{
            temp.push(Number(arr[i]))
          }
     }
       let sum=0
     for(let j=0;j<temp.length;j++){
          sum +=temp[j]
     }
     return sum
    }
}
