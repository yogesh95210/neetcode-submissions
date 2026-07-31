class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
         let stack =[]
  let map={")": "(",
    "}": "{",
    "]": "["} 

    for( let i=0;i<str.length;i++){
        if(str[i]==="(" || str[i]==="{"|| str[i]==="["){
            stack.push(str[i])
        }else{
             if(stack.pop()!==map[str[i]]){
            return false
        }
    }
    }
    return stack.length===0
    }
}
