class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i = len(a) - 1
        j = len(b) - 1

        carry = 0
        result = ""

        while i >= 0 or j >= 0 or carry > 0:
            bitA = int(a[i]) if i >= 0 else 0
            bitB = int(b[j]) if j >= 0 else 0

            total_sum = bitA + bitB + carry

            # Prepend the binary bit to the result string
            result = str(total_sum % 2) + result

            carry = total_sum // 2

            i -= 1
            j -= 1

        return result

        