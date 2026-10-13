class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hash_map = {}

        # Build frequency map for string s
        for char in s:
            hash_map[char] = hash_map.get(char, 0) + 1

        # Decrement frequencies using string t
        for char in t:
            if not hash_map.get(char):
                return False
            hash_map[char] -= 1

        return True
        