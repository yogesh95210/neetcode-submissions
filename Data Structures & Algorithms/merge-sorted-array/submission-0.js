class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(arr1, m, arr2, n) {
         let i=0
    let j=0
    let merged =[];
    while(i<m && j<n){
        if(arr1[i]<=arr2[j]){
            merged.push(arr1[i])
            i++;
        }else{
            merged.push(arr2[j])
            j++
        }
    }
    // add remaning element
    while(i<m) merged.push(arr1[i++])
    while(j<n) merged.push(arr2[j++])
        for(let k=0;k<merged.length;k++){
            arr1[k]=merged[k]
        }
    return arr1
    }
}
