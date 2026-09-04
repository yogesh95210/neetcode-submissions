class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        let res=[]
        arr.sort((a,b)=>a-b)
        for(let i=0; i<arr.length-2;i++){
            if(i>0 && arr[i]===arr[i-1]){
                continue;
            }

            let l=i+1
            let r= arr.length-1

            while(l<r){
                let sum= arr[i] +arr[l]+arr[r]
                if(sum<0){
                    l++
                }else if(sum>0){
                    r--
                }else{
                    res.push([arr[i],arr[l],arr[r]])
                    l++
                    r--

                    while(l<r && arr[l] ===arr[l-1]){
                        l++
                    }
                    while(l<r && arr[l]===arr[r+1]){
                        r--
                    }
                }
            }

        }
         return res
    }  
}
