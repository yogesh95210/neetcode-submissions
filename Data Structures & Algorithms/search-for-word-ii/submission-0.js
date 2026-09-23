class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

    // Trie Node
    function TrieNode() {
        this.children = {};
        this.word = null;
    }

    // Build Trie
    let root = new TrieNode();

    for (let word of words) {
        let node = root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.word = word;
    }

    let result = [];

    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c, node) {

        // Boundary check
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols
        ) {
            return;
        }

        let char = board[r][c];

        // Current character Trie mein nahi hai
        if (!node.children[char]) {
            return;
        }

        let nextNode = node.children[char];

        // Word found
        if (nextNode.word !== null) {
            result.push(nextNode.word);

            // Duplicate result avoid karo
            nextNode.word = null;
        }

        // Visited mark
        board[r][c] = '#';

        // Four directions
        dfs(r + 1, c, nextNode);
        dfs(r - 1, c, nextNode);
        dfs(r, c + 1, nextNode);
        dfs(r, c - 1, nextNode);

        // Restore
        board[r][c] = char;
    }

    // Start DFS from every cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
    }
}
