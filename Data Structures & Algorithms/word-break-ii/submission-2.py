class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
            word_set = set(wordDict)
            n = len(s)
            
            # dp[i] will store all valid sub-sentences for s[0:i]
            dp = [[] for _ in range(n + 1)]
            dp[0] = [""]  # Base case: empty string has an empty sentence string

            for end in range(1, n + 1):
                for start in range(end):
                    word = s[start:end]
                    # If the prefix s[0:start] is valid and the word exists in our dict
                    if dp[start] and word in word_set:
                        for prev_sentence in dp[start]:
                            if prev_sentence == "":
                                dp[end].append(word)
                            else:
                                dp[end].append(prev_sentence + " " + word)
                                
            return dp[n]
            