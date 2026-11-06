class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        word_set = set(wordDict)
        memo = {}

        def dfs(start: int) -> List[str]:
            # String completely processed
            if start == len(s):
                return [""]

            # Already calculated (memoization check)
            if start in memo:
                return memo[start]

            result = []

            for end in range(start + 1, len(s) + 1):
                word = s[start:end]

                # Dictionary mein word nahi hai
                if word not in word_set:
                    continue

                remaining_sentences = dfs(end)

                for sentence in remaining_sentences:
                    if sentence == "":
                        result.append(word)
                    else:
                        result.append(word + " " + sentence)

            memo[start] = result
            return result

        return dfs(0)
        