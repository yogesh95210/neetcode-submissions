class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
         # Rows, Columns aur 3x3 Boxes ke unique elements track karne ke liye sets initialize karein
        rows = defaultdict(set)
        cols = defaultdict(set)
        boxes = defaultdict(set) # Key format hoga: (row // 3, col // 3)

        for r in range(9):
            for c in range(9):
                val = board[r][c]
                
                # Agar cell khali hai, toh aage badhein
                if val == ".":
                    continue
                
                # 3x3 box ka unique index calculate karein
                box_idx = (r // 3, c // 3)
                
                # Agar value pehle se kisi row, col ya box mein exist karti hai toh invalid hai
                if (val in rows[r] or 
                    val in cols[c] or 
                    val in boxes[box_idx]):
                    return False
                
                # Value ko respective sets mein add karein
                rows[r].add(val)
                cols[c].add(val)
                boxes[box_idx].add(val)
                
        return True

        