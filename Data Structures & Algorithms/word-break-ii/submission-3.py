from functools import lru_cache

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        word_set = set(wordDict)

        # Automatically caches the return values of dfs(start)
        @lru_cache(None)
        def dfs(start: int) -> List[str]:
            if start == len(s):
                return [""]

            result = []
            for end in range(start + 1, len(s) + 1):
                word = s[start:end]
                if word in word_set:
                    for sentence in dfs(end):
                        if sentence == "":
                            result.append(word)
                        else:
                            result.append(word + " " + sentence)
            return result

        return dfs(0)