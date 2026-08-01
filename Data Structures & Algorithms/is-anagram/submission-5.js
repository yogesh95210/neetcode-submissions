class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false
      let map= new Map()
      for(let char of s){
        if(map.has(char)){
          map.set(char, map.get(char)+1)
        }else{
          map.set(char,1)
        }
      }

      for(let tChar of t){
        if(!map.has(tChar)||map.get(tChar)===0) return false
        map.set(tChar,map.get(tChar)-1)
      }
      return true
    }
}
