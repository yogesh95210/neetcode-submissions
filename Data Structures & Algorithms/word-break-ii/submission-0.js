class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
         let wordSet = new Set(wordDict);
    let memo = new Map();

    function dfs(start) {
        // String completely process ho gayi
        if (start === s.length) {
            return [""];
        }

        // Already calculated
        if (memo.has(start)) {
            return memo.get(start);
        }

        let result = [];

        for (let end = start + 1; end <= s.length; end++) {
            let word = s.slice(start, end);

            // Dictionary mein word nahi hai
            if (!wordSet.has(word)) {
                continue;
            }

            let remainingSentences = dfs(end);

            for (let sentence of remainingSentences) {
                if (sentence === "") {
                    result.push(word);
                } else {
                    result.push(word + " " + sentence);
                }
            }
        }

        memo.set(start, result);

        return result;
    }

    return dfs(0);

    }
}
