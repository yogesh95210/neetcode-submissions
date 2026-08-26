class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

    let l = 0;
    let r = s.length - 1;

    while (l < r) {

        // Skip non-alphanumeric from left
        if (!/[a-zA-Z0-9]/.test(s[l])) {
            l++;
            continue;
        }

        // Skip non-alphanumeric from right
        if (!/[a-zA-Z0-9]/.test(s[r])) {
            r--;
            continue;
        }

        // Compare
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }

    return true;
    }
}
