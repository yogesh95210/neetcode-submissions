class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for char in s:
            if char in ("(", "{", "["):
                stack.append(char)
            else:
                if not stack or stack.pop() != map[char]:
                    return False

        return len(stack) == 0
        