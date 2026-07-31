class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         return strs.map(s => s.length + "#" + s).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
    let res = [];
    let i = 0;

    while (i < s.length) {
      let j = i;
      while (s[j] !== "#") j++; 
      let length = parseInt(s.slice(i, j));
      let str = s.slice(j + 1, j + 1 + length);
      res.push(str);
      i = j + 1 + length;
    }

    return res;
    }
}
