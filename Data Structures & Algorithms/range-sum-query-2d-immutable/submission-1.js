class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
         if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

        const m = matrix.length;
        const n = matrix[0].length;

        // (m + 1) x (n + 1) size ka prefix array 0 se initialize karein
        this.prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

        // 2D Prefix Sum Matrix ko fill karein
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.prefix[i + 1][j + 1] = 
                    matrix[i][j] + 
                    this.prefix[i][j + 1] + 
                    this.prefix[i + 1][j] - 
                    this.prefix[i][j];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return (
            this.prefix[row2 + 1][col2 + 1] - 
            this.prefix[row1][col2 + 1] - 
            this.prefix[row2 + 1][col1] + 
            this.prefix[row1][col1]
        );
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


