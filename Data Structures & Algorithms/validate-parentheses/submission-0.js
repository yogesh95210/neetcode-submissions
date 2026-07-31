class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
         let prev;
      do{
        prev= str
        str= str.replace("()","").replace("{}","").replace("[]","")
      }
      while(str.length!==prev.length)

        return str.length===0
    }
}
