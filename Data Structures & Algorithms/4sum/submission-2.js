class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(arr, target) {
      let res=[]
        arr.sort((a,b)=>a-b)
        for(let i=0; i<arr.length-3;i++){
            if(i>0 && arr[i]===arr[i-1]){
                continue;
            }
            for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue;
            }

            let l=j+1
            let r= arr.length-1

            while(l<r){
                let sum= arr[i]+arr[j] +arr[l]+arr[r]
                if(sum<target){
                    l++
                }else if(sum>target){
                    r--
                }else{
                    res.push([arr[i],arr[j],arr[l],arr[r]])
                    l++
                    r--

                    while(l<r && arr[l] ===arr[l-1]){
                        l++
                    }
                    while(l<r && arr[r]===arr[r+1]){
                        r--
                    }
                }
            }

        }
        }
         return res
    }
}
