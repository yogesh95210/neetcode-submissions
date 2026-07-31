class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       if (!strs.length) return "";
   // if (strs.includes("")) return "";

    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {  
        let charSet = new Set();
        for (let str of strs) {
            if (i >= str.length) return prefix;
            charSet.add(str[i]);
        }

        if (charSet.size > 1) {
            return prefix;
        } else {
            prefix += strs[0][i];
        }
    }
    return prefix;
    }
    }
